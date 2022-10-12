import * as http from 'http';
import { readFileSync } from 'fs';
import { MapGeneratorLexer } from '../parser/gen/MapGeneratorLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapGeneratorParser } from '../parser/gen/MapGeneratorParser';
import { ParseToASTVisitor } from '../parser/ParseToASTVisitor';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { OutputVisitor } from '../ast/evaluators/OutputVisitor';
import CreateStatementBuilder from '../CreateStatements/CreateStatementBuilder';
import { testing } from '../util/constants';

export default class MapServer {
	private readonly port: number;
	private express: Application;
	private server: http.Server | undefined;

	constructor(port: number) {
		console.info(`Server::<init>( ${port} )`);
		this.port = port;
		this.express = express();

		this.registerMiddleware();
		this.registerRoutes();

		this.express.use(express.static(path.join(__dirname, '../../../../client/out')));
		this.express.use(express.static(path.join(__dirname, '../../../../client/assets')));
	}

	public start(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.server !== undefined) {
				console.error('Server already listening');
				reject();
			} else {
				this.server = this.express
					.listen(this.port, () => {
						console.info(`Server listening on port: ${this.port}`);
						resolve();
					})
					.on('error', (err: Error) => {
						console.error(`Server start() ERROR: ${err.message}`);
						reject(err);
					});
			}
		});
	}

	public stop(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.server === undefined) {
				console.error('Server not started');
				reject();
			} else {
				this.server.close(() => {
					console.info('Server closed');
					resolve();
				});
			}
		});
	}

	private getMapOutput(req: Request, res: Response) {
		try {
			const content = readFileSync(path.join(__dirname, '../../../../user/USER_INPUT.mg')).toString();
			const lexer = new MapGeneratorLexer(CharStreams.fromString(content));
			const tokenStream = new CommonTokenStream(lexer);
			const parser = new MapGeneratorParser(tokenStream);
			const parseToASTVisitor = new ParseToASTVisitor();
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

			res.status(200).json({ result: createStatementBuilder.createStatements });
		} catch (e: any) {
			res.status(400).json({ error: e.message });
		}
	}

	private registerMiddleware() {
		this.express.use(express.json());
		this.express.use(express.raw({ type: 'application/*', limit: '10mb' }));
		this.express.use(cors());
	}

	private registerRoutes() {
		this.express.get('/map', this.getMapOutput);
	}
}
