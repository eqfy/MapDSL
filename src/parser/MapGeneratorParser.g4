parser grammar MapGeneratorParser;
options { tokenVocab=MapGeneratorLexer; }

// Top Level
program: WS* (definitionBlock WS+)? outputBlock WS* EOF;

// Defintion Block
definitionBlock: DEFINITIONS ((WS+ functionDeclaration) | (WS+ variableDeclaration) | WS)* WS END_DEFINITION;
functionDeclaration: FUNCTION WS+ FUNCTION_NAME WS* OPEN_PAREN WS* VARIABLE_NAME WS* (WS* COMMA WS* VARIABLE_NAME WS*)* CLOSE_PAREN WS* OPEN_CURLY WS* (statement)* WS* CLOSE_CURLY;

// Output Block
outputBlock: OUTPUT (statement | loopBlock)* END_OUTPUT;
statement: (variableDeclaration | variableAssignment | createCall | functionCall) WS* SEMICOLON;

// Loop Block
loopBlock: LOOP WS+ POSITIVE_NUMBER WS+ TIMES WS+ statement* WS+ END_LOOP;

// Variables
variableAssignment: VARIABLE_NAME WS* EQ WS* (expression | position) WS* SEMICOLON;
variableDeclaration: VARIABLE WS+ variableAssignment;

// Calls
functionCall: FUNCTION_NAME WS* OPEN_PAREN WS* expression WS* (WS* COMMA WS* expression WS*)* CLOSE_PAREN;
createCall: CREATE WS+ (markerOutput | streetOutput);

// Outputs
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP) WS+ AT WS+ position;
streetOutput: (HIGHWAY | STREET | BRIDGE) WS+ FROM WS+ position WS+ TO WS+ position;

// Misc.
expression: position_access | number | VARIABLE_NAME | ((position_access | number | VARIABLE_NAME) WS* OPERATOR WS* expression);
position: OPEN_PAREN WS* expression WS* COMMA WS* expression WS* CLOSE_PAREN;
position_access: VARIABLE_NAME CHAIN_OP COORDINATE;
number: POSITIVE_NUMBER | NEGATIVE_NUMBER;



