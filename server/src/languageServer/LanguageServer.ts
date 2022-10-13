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
	Connection,
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import ErrorProvider from './providers/ErrorProvider';
import { MapApp } from "../app/rest/MapApp";
import * as fs from "fs";
import path from "path";

export default class LanguageServer {
	connection: Connection;
	documents: TextDocuments<TextDocument>;
	errorProvider: ErrorProvider;

	constructor() {
		this.connection = createConnection(ProposedFeatures.all);
		this.initLanguageServer();
		this.initMapServer();
		this.errorProvider = new ErrorProvider(this.connection);
		this.documents = new TextDocuments(TextDocument);
		this.setupHandlers();
		this.documents.listen(this.connection);
		this.connection.listen();
	}

	private setupHandlers() {
		this.documents.onDidChangeContent((change) => {
			fs.writeFile(path.join(__dirname, '../USER_INPUT.mg'), change.document.getText(), function (err) {
				if (err) {
					return console.error(err);
				}
				console.log('File created at: ' + path.join(__dirname, '../USER_INPUT.mg'));
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
					completionProvider: {
						resolveProvider: true,
					},
					workspace: {
						workspaceFolders: {
							supported: true,
						},
					},
				},
			};
			return result;
		});
	}
}
