import { readFileSync } from 'fs';
import { MapGeneratorLexer } from './parser/gen/MapGeneratorLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapGeneratorParser } from './parser/gen/MapGeneratorParser';
import { ParseToASTVisitor } from './parser/ParseToASTVisitor';
import { syncWriteFile } from './util/syncWriteFile';
import MapBuilder from './fakeClient/MapBuilder';
import OutputBuilder from './outputBuilder/OutputBuilder';
import Program from './outputBuilder/Program';

const content = readFileSync('./USER_INPUT.txt').toString();
const lexer = new MapGeneratorLexer(CharStreams.fromString(content));
const tokenStream = new CommonTokenStream(lexer);
const parser = new MapGeneratorParser(tokenStream);
const parseToASTVisitor = new ParseToASTVisitor();
const programAST = parser.program().accept(parseToASTVisitor);
const programInternalRepresentation = new Program(programAST);
const outputBuilder = new OutputBuilder(programInternalRepresentation);
const mapBuilder = new MapBuilder(outputBuilder.getAllOutputStatements());
mapBuilder.render();

// just for testing / a visual
syncWriteFile('../../AST_OUTPUT.json', JSON.stringify(programAST, null, 4));
