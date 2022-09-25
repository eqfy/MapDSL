parser grammar MapGeneratorParserWithWhiteSpace;
options { tokenVocab=MapGeneratorLexer; }

// Top Level
program: (definitionBlock WS)? outputBlock EOF;

// Defintion Block
definitionBlock: DEFINITIONS WS (functionDeclaration | variableDeclaration)* WS END_DEFINITION;
functionDeclaration: FUNCTION WS NAME WS? OPEN_PAREN WS? NAME WS? (COMMA WS? NAME WS?)* CLOSE_PAREN WS? OPEN_CURLY WS? (statement | loopBlock)* WS? CLOSE_CURLY;

// Output Block
outputBlock: OUTPUT (statement | loopBlock)* END_OUTPUT;
statement: (variableDeclaration | variableAssignment | createCall | functionCall) WS? SEMICOLON;

// Loop Block
loopBlock: LOOP WS POSITIVE_NUMBER WS TIMES WS statement* WS END_LOOP;

// Variables
variableAssignment: NAME WS? EQ WS? (expression | position);
variableDeclaration: VARIABLE WS NAME WS? EQ WS? (expression | position) WS? SEMICOLON;

// Calls
functionCall: NAME WS? OPEN_PAREN WS? expression WS? (COMMA WS? expression WS?)* CLOSE_PAREN;
createCall: CREATE WS (markerOutput | streetOutput);

// Outputs
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP) WS AT WS position;
streetOutput: (HIGHWAY | STREET | BRIDGE) WS FROM WS position WS TO WS position;

// Misc.
expression: (POSITION_ACCESS | POSITIVE_NUMBER | NEGATIVE_NUMBER | NAME) (WS? OPERATOR WS? (POSITION_ACCESS |POSITIVE_NUMBER | NEGATIVE_NUMBER | NAME))?; // should be recursive but couldnt get it to work -- need help here
position: (OPEN_PAREN WS? expression WS? COMMA WS? expression WS? CLOSE_PAREN) | NAME;
