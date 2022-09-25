import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { MapGeneratorLexer } from './parser/MapGeneratorLexer';
import { MapGeneratorParser } from './parser/MapGeneratorParser';

const tokens = [
  'WS',
  'OPEN_CURLY',
  'CLOSE_CURLY',
  'OPEN_PAREN',
  'CLOSE_PAREN',
  'COMMA',
  'CHAIN_OP',
  'EQ',
  'COORDINATE',
  ' VARIABLE',
  ' FUNCTION',
  'DEFINITIONS',
  'TO',
  'FROM',
  'AT',
  'HIGHWAY',
  'STREET',
  'BRIDGE',
  'TIMES',
  'CREATE',
  'SEMICOLON',
  'STOP',
  'TRAIN',
  'TRAFFIC',
  'BUS',
  'SIGN',
  'LIGHT',
  'OUTPUT',
  'END_OUTPUT',
  'END_DEFINITION',
  'LOOP',
  'END_LOOP',
  'POSITIVE_NUMBER',
  'NEGATIVE_NUMBER',
  'OPERATOR',
  'BUS_STOP',
  'STOP_SIGN',
  'TRAFFIC_LIGHT',
  'TRAIN_STOP',
  'POSITION_ACCESS',
  'NAME'
];
// Create the lexer and parser
const content = readFileSync('./build/inputForParser.txt').toString();
const lexer = new MapGeneratorLexer(CharStreams.fromString(content));
const tokenStream = new CommonTokenStream(lexer);
const parser = new MapGeneratorParser(tokenStream);
// for (const token of lexer.getAllTokens()) {
//   console.log(
//     'type: ' + tokens[token.type - 1] + '  string: ' + token.text + '\n'
//   );
// }
// lexer.reset();
// Parse the input, where `compilationUnit` is whatever entry point you defined
const tree = parser.program();
//console.log(tree);
