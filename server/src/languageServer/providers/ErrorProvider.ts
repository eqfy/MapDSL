import { Connection, Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';
import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { MapGeneratorLexer } from "../../app/parser/gen/MapGeneratorLexer";
import { MapGeneratorParser } from "../../app/parser/gen/MapGeneratorParser";
import { ParseToASTVisitor } from "../../app/parser/ParseToASTVisitor";
import { OutputVisitor } from "../../app/ast/evaluators/OutputVisitor";
import { testing } from "../../app/util/constants";
import CreateStatementBuilder from "../../app/CreateStatements/CreateStatementBuilder";
import { findEndOfToken } from "../util/findEndOfToken";
import ErrorBuilder from '../../app/ast/Errors/ErrorBuilder';
import { StaticCheckVisitor } from "../../app/ast/evaluators/StaticCheckVisitor";

export default class ErrorProvider {
	connection: Connection;

	constructor(connection: Connection) {
		this.connection = connection;
	}

	async validateTextDocument(textDocument: TextDocument): Promise<void> {
		const text = textDocument.getText();
		const lexer = new MapGeneratorLexer(CharStreams.fromString(text));
		const diagnostics: Diagnostic[] = [];
		lexer.addErrorListener({
			syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
				const diagnostic: Diagnostic = {
					severity: DiagnosticSeverity.Error,
					range: {
						start: { line: line - 1, character: column },
						end: findEndOfToken(textDocument, line - 1, column),
					},
					message: msg,
				};

				diagnostics.push(diagnostic);
				console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
			},
		});
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new MapGeneratorParser(tokenStream);
		const parseToASTVisitor = new ParseToASTVisitor();
		parser.addErrorListener({
			syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
				const diagnostic: Diagnostic = {
					severity: DiagnosticSeverity.Error,
					range: {
						start: { line: line - 1, character: column },
						end: findEndOfToken(textDocument, line - 1, column),
					},
					message: msg,
				};

				diagnostics.push(diagnostic);
				console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
			},
		});
		const programAST = parser.program().accept(parseToASTVisitor);
		const createStatementBuilder = new CreateStatementBuilder();
		const outputVisitor = new OutputVisitor();
		const staticCheckVisitor = new StaticCheckVisitor();
		const errorBuilder = new ErrorBuilder();
		if (!testing) {
			programAST.accept(staticCheckVisitor, {
				errorBuilder: errorBuilder,
				variableTable: new Map(),
				functionTable: new Map(),
				constantTable: new Map(),
			});
			programAST.accept(outputVisitor, {
				errorBuilder: errorBuilder,
				createStatementBuilder: createStatementBuilder,
				variableTable: new Map(),
				functionTable: new Map(),
				constantTable: new Map(),
			});
		}
		for(const err of errorBuilder.errors) {
			const diagnostic: Diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: textDocument.positionAt(err.range.zeroIndexStart),
					end: textDocument.positionAt(err.range.zeroIndexEnd),
				},
				message: err.msg,
				source: 'mg',
			};
			diagnostics.push(diagnostic);
		}

		// Send the computed diagnostics to VSCode.
		this.connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
	}
}
