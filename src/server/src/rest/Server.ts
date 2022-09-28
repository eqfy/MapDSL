import * as http from 'http';
import { readFileSync } from 'fs';
import { MapGeneratorLexer } from '../parser/gen/MapGeneratorLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapGeneratorParser } from '../parser/gen/MapGeneratorParser';
import { ParseToASTVisitor } from '../parser/ParseToASTVisitor';
import Program from '../outputBuilder/Program';
import CreateStatementBuilder from '../outputBuilder/CreateStatementBuilder';
import { syncWriteFile } from '../util/syncWriteFile';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CreateStatement } from '../outputBuilder/CreateStatement';
import path from 'path';

export default class Server {
  private readonly port: number;
  private express: Application;
  private server: http.Server | undefined;

  constructor(port: number) {
    console.info(`Server::<init>( ${port} )`);
    this.port = port;
    this.express = express();

    this.registerMiddleware();
    this.registerRoutes();

    this.express.use(express.static('../../public'));
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

  private registerMiddleware() {
    this.express.use(express.json());
    this.express.use(express.raw({ type: 'application/*', limit: '10mb' }));
    this.express.use(cors());
  }

  private registerRoutes() {
    this.express.get('/map', Server.getMapOutput);
  }

  private static getMapOutput(req: Request, res: Response) {
    try {
      const content = readFileSync(path.join(__dirname, '../USER_INPUT.txt')).toString();
      const lexer = new MapGeneratorLexer(CharStreams.fromString(content));
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new MapGeneratorParser(tokenStream);
      const parseToASTVisitor = new ParseToASTVisitor();
      const programAST = parser.program().accept(parseToASTVisitor);
      const programInternalRepresentation = new Program(programAST);
      const outputBuilder = new CreateStatementBuilder(programInternalRepresentation);
      const allCreateStatements: CreateStatement[] = outputBuilder.getAllCreateStatements();
      res.status(200).json({ result: allCreateStatements });
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
}
