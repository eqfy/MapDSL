parser grammar MapGeneratorParser;
options { tokenVocab=MapGeneratorLexer; }

// Top Level
program: (definitionBlock )? outputBlock EOF;

// Defintion Block
definitionBlock: DEFINITIONS  globalBodyElement+  END_DEFINITION;
functionDeclaration: FUNCTION  functionName  OPEN_PAREN  parameterName  (COMMA  parameterName)* CLOSE_PAREN  OPEN_CURLY  bodyElement+  CLOSE_CURLY;

// Output Block
outputBlock: OUTPUT bodyElement+ END_OUTPUT;
statement: (localVariableDeclaration | variableAssignment | createCall | functionCall)  SEMICOLON;

// Loop Block
loopBlock: LOOP  POSITIVE_NUMBER  TIMES  statement+  END_LOOP;

// Variables
variableAssignment: variableName  EQ  expression;
localVariableDeclaration: VARIABLE  variableName  EQ  expression;
globalVariableDeclaration: CONSTANT variableName EQ expression SEMICOLON;

// Calls
functionCall: functionName  OPEN_PAREN  expression  (COMMA  expression )* CLOSE_PAREN;
createCall: CREATE  (markerOutput | streetOutput);

// Outputs
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP)  AT  position;
streetOutput: (HIGHWAY | STREET | BRIDGE)  FROM  position  TO  position;

// Misc.
expression: leftExpressionValue (OPERATOR expression)?;
leftExpressionValue: (positionAccess | variableName | position | NEGATIVE_NUMBER | POSITIVE_NUMBER);
position: (OPEN_PAREN  expression  COMMA  expression  CLOSE_PAREN) | variableName;
bodyElement: (statement | loopBlock);
globalBodyElement: (functionDeclaration | globalVariableDeclaration);
positionAccess: NAME CHAIN_OP COORDINATE;
// lazy hack to make it easier to differentiate between names while preventing using lexer modes
functionName: NAME;
parameterName: NAME;
variableName: NAME;
