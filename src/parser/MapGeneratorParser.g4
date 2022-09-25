parser grammar MapGeneratorParser;
options { tokenVocab=MapGeneratorLexer; }

// Top Level
program: (definitionBlock )? outputBlock EOF;

// Defintion Block
definitionBlock: DEFINITIONS  (functionDeclaration | variableDeclarationStatement)*  END_DEFINITION;
functionDeclaration: FUNCTION  NAME  OPEN_PAREN  NAME  (COMMA  NAME )* CLOSE_PAREN  OPEN_CURLY  (statement | loopBlock)*  CLOSE_CURLY;

// Output Block
outputBlock: OUTPUT (statement | loopBlock)* END_OUTPUT;
statement: (variableDeclaration | variableAssignment | createCall | functionCall)  SEMICOLON;

// Loop Block
loopBlock: LOOP  POSITIVE_NUMBER  TIMES  statement*  END_LOOP;

// Variables
variableAssignment: NAME  EQ  expression;
variableDeclaration: VARIABLE  NAME  EQ  expression;
variableDeclarationStatement: variableDeclaration SEMICOLON;

// Calls
functionCall: NAME  OPEN_PAREN  expression  (COMMA  expression )* CLOSE_PAREN;
createCall: CREATE  (markerOutput | streetOutput);

// Outputs
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP)  AT  position;
streetOutput: (HIGHWAY | STREET | BRIDGE)  FROM  position  TO  position;

// Misc.
expression: (position | POSITION_ACCESS | number) | ((POSITION_ACCESS | number | NAME) OPERATOR expression); // should be recursive but couldnt get it to work -- need help here
position: (OPEN_PAREN  expression  COMMA  expression  CLOSE_PAREN) | NAME;
number: POSITIVE_NUMBER | NEGATIVE_NUMBER;
