/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  TextDocumentSyncKind,
  InitializeResult,
  Connection
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import ErrorProvider from './providers/ErrorProvider';
import { MapApp } from '../app/rest/MapApp';
import * as fs from 'fs';
import path from 'path';
import { availableTokenModifiers, availableTokenTypes } from './util/semanticTokens';
import SemanticTokenProvider from './providers/SemanticTokenProvider';

export default class LanguageServer {
  connection: Connection;
  documents: TextDocuments<TextDocument>;
  errorProvider: ErrorProvider;
  semanticTokenProvider: SemanticTokenProvider;

  constructor() {
    this.connection = createConnection(ProposedFeatures.all);
    this.initLanguageServer();
    this.initMapServer();
    this.errorProvider = new ErrorProvider(this.connection);
    this.semanticTokenProvider = new SemanticTokenProvider();
    this.documents = new TextDocuments(TextDocument);
    this.setupHandlers();
    this.documents.listen(this.connection);
    this.connection.listen();
  }

  private setupHandlers() {
    this.setupOnDidChangeContentHandler();
    this.setupSemanticTokenHandler();
  }

  private setupSemanticTokenHandler() {
    this.connection.languages.semanticTokens.on(async (params) => {
      try {
        const document = this.documents.get(params.textDocument.uri);
        if (document) return this.semanticTokenProvider.getSemanticTokens(document);
      } catch (error) {
        throw new Error('onSemanticTokens');
      }
      return {
        data: []
      };
    });
  }

  private setupOnDidChangeContentHandler() {
    this.documents.onDidChangeContent((change) => {
      console.debug('onDidChangeContent');
      fs.writeFile(path.join(__dirname, '../USER_INPUT.mg'), change.document.getText(), function (err) {
        if (err) {
          return console.error(err);
        }
      });
      this.errorProvider.validateTextDocument(change.document);
    });
  }

  private initMapServer() {
    console.info('App - starting');
    const app = new MapApp();
    (async () => {
      await app.initServer(1337);
    })();
  }

  private initLanguageServer() {
    this.connection.onInitialize((params: InitializeParams) => {
      const result: InitializeResult = {
        capabilities: {
          textDocumentSync: TextDocumentSyncKind.Incremental,
          workspace: {
            workspaceFolders: {
              supported: true
            }
          },
          semanticTokensProvider: {
            full: true,
            legend: {
              tokenTypes: availableTokenTypes,
              tokenModifiers: availableTokenModifiers
            }
          }
        }
      };
      return result;
    });
  }
}
