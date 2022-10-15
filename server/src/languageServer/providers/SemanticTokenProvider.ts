import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { MapGeneratorLexer } from '../../app/parser/gen/MapGeneratorLexer';
import { MapGeneratorParser } from '../../app/parser/gen/MapGeneratorParser';
import { ParseToASTVisitor } from '../../app/parser/ParseToASTVisitor';
import { SemanticTokens, SemanticTokensBuilder } from 'vscode-languageserver';
import { encodeTokenModifiers, encodeTokenType } from '../util/semanticTokens';

export default class SemanticTokenProvider {
  getSemanticTokens(textDocument: TextDocument): SemanticTokens {
    console.debug('getSemanticTokens');
    const semanticTokenBuilder: SemanticTokensBuilder = new SemanticTokensBuilder();
    const text = textDocument.getText();
    const lexer = new MapGeneratorLexer(CharStreams.fromString(text));
    lexer.addErrorListener({
      syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
      }
    });
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MapGeneratorParser(tokenStream);
    const parseToASTVisitor = new ParseToASTVisitor();
    parser.addErrorListener({
      syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
      }
    });
    parser.program().accept(parseToASTVisitor);
    const tokenInfo = parseToASTVisitor.semanticTokenInfo.sort((a, b) => a.range.start - b.range.start);
    for (const info of tokenInfo) {
      const pos = textDocument.positionAt(info.range.start);
      const len = info.range.end - info.range.start;
      semanticTokenBuilder.push(
        pos.line,
        pos.character,
        len,
        encodeTokenType(info.tokenType),
        encodeTokenModifiers(info.tokenModifiers)
      );
    }
    return semanticTokenBuilder.build();
  }
}
