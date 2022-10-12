import { Connection, Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';
import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { MapGeneratorLexer } from "../../app/parser/gen/MapGeneratorLexer";
import { MapGeneratorParser } from "../../app/parser/gen/MapGeneratorParser";
import { ParseToASTVisitor } from "../../app/parser/ParseToASTVisitor";
import { OutputVisitor } from "../../app/ast/evaluators/OutputVisitor";
import { testing } from "../../app/util/constants";
import CreateStatementBuilder from "../../app/CreateStatements/CreateStatementBuilder";

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
					severity: DiagnosticSeverity.Warning,
					range: {
						start: { line: line - 1, character: column },
						end: { line: line - 1, character: column + 2 },
					},
					message: msg,
					source: 'mg',
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
					severity: DiagnosticSeverity.Warning,
					range: {
						start: { line: line - 1, character: column },
						end: { line: line - 1, character: column + 2 },
					},
					message: msg,
					source: 'mg',
				};

				diagnostics.push(diagnostic);
				console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
			},
		});
		const programAST = parser.program().accept(parseToASTVisitor);
		const createStatementBuilder = new CreateStatementBuilder();
		const outputVisitor = new OutputVisitor();
		if (!testing) {
			programAST.accept(outputVisitor, {
				createStatementBuilder: createStatementBuilder,
				variableTable: new Map(),
				functionTable: new Map(),
				constantTable: new Map(),
			});
		}

		// Send the computed diagnostics to VSCode.
		this.connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
	}
}
