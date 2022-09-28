import Server from './rest/Server';
import { readFileSync } from 'fs';
import { MapGeneratorLexer } from './parser/gen/MapGeneratorLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapGeneratorParser } from './parser/gen/MapGeneratorParser';
import { ParseToASTVisitor } from './parser/ParseToASTVisitor';
import Program from './outputBuilder/Program';
import CreateStatementBuilder from './outputBuilder/CreateStatementBuilder';
import { CreateStatement } from './outputBuilder/CreateStatement';
import { syncWriteFile } from './util/syncWriteFile';

export class App {
  public initServer(port: number) {
    const server = new Server(port);
    return server.start().catch((err: Error) => {
      console.error(`App::initServer() - ERROR: ${err.message}`);
    });
  }
}

console.info('App - starting');
const app = new App();
(async () => {
  await app.initServer(1337);
})();

forTesting();

function forTesting() {
  const content = readFileSync('./USER_INPUT.txt').toString();
  const lexer = new MapGeneratorLexer(CharStreams.fromString(content));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new MapGeneratorParser(tokenStream);
  const parseToASTVisitor = new ParseToASTVisitor();
  const programAST = parser.program().accept(parseToASTVisitor);
  syncWriteFile('../../AST_OUTPUT.json', JSON.stringify(programAST, null, 4));
}
