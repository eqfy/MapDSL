parser grammar MapGeneratorParser;
options { tokenVocab=MapGeneratorLexer; }

// Top Level
program: (definitionBlock )? outputBlock EOF;

// Defintion Block
definitionBlock: DEFINITIONS  globalBodyElement+  END_DEFINITION;
globalBodyElement: (functionDeclaration | globalVariableDeclaration); // These two are technically statements, tho we separated them in definition block
functionDeclaration: FUNCTION  functionName  OPEN_PAREN  parameterName  (COMMA  parameterName)* CLOSE_PAREN  OPEN_CURLY  statement+  CLOSE_CURLY;

// Output Block
outputBlock: OUTPUT statement+ END_OUTPUT;
statement: (localVariableDeclaration | variableAssignment | createCall | loopBlock | expression);

// Loop Block
loopBlock: LOOP  POSITIVE_NUMBER  TIMES  statement+  END_LOOP;

// Variables
variableAssignment: variableName  EQ  expression SEMICOLON;
localVariableDeclaration: VARIABLE  variableName  EQ  expression SEMICOLON;
globalVariableDeclaration: CONSTANT variableName EQ expression SEMICOLON;

// Calls
functionCall: functionName  OPEN_PAREN  expression  (COMMA  expression )* CLOSE_PAREN SEMICOLON;
createCall: CREATE  (markerOutput | streetOutput) SEMICOLON;

// Outputs
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP)  AT expression;
streetOutput: (HIGHWAY | STREET | BRIDGE)  FROM  expression TO  expression;
polygonOutput: (WATER | BUILDING) AT expression expression expression AND expression;

// Expressions
// We do not allow operations on position
expression: (operableExpr | position );
operableExpr: (positionAccess | functionCall | variableName | NEGATIVE_NUMBER | POSITIVE_NUMBER) operation?;
operation: OPERATOR operableExpr;
position: (OPEN_PAREN  operableExpr  COMMA  operableExpr  CLOSE_PAREN );
positionAccess: NAME CHAIN_OP COORDINATE;

// Misc.
// lazy hack to make it easier to differentiate between names while preventing using lexer modes
functionName: NAME;
parameterName: NAME;
variableName: NAME;
