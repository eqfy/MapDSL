parser grammar MapGeneratorParser;
options { tokenVocab=MapGeneratorLexer; }

// Top Level
program: (canvasConfiguration)? (definitionBlock )? outputBlock EOF;

// Canvas configuration
canvasConfiguration: CANVAS_SIZE EQ POSITIVE_NUMBER BY POSITIVE_NUMBER SEMICOLON;

// Defintion Block
definitionBlock: DEFINITIONS  globalBodyElement+  END_DEFINITION;
globalBodyElement: (functionDeclaration | globalVariableDeclaration); // These two are technically statements, tho we separated them in definition block
functionDeclaration: FUNCTION  functionName  OPEN_PAREN  parameterName  (COMMA  parameterName)* CLOSE_PAREN  OPEN_CURLY  statement+  CLOSE_CURLY;

// Output Block
outputBlock: OUTPUT statement+ END_OUTPUT;
statement: (localVariableDeclaration | variableAssignment | createCall | loopBlock | ifElseBlock | functionCall);

// Loop Block
loopBlock: LOOP  expression  TIMES  statement+  END_LOOP;

// Control Flow Block
ifElseBlock: IF firstOpExpr THEN branchBody (ELSE_IF firstOpExpr THEN branchBody)* (ELSE branchBody)? END_IF;
branchBody: statement*;

// Variables
variableAssignment: variableName  EQ  expression SEMICOLON;
localVariableDeclaration: VARIABLE  variableName  EQ  expression SEMICOLON;
globalVariableDeclaration: CONSTANT variableName EQ expression SEMICOLON;

// Outputs
createCall: CREATE  (markerOutput | streetOutput | polygonOutput) SEMICOLON;
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP)  AT expression;
streetOutput: (HIGHWAY | STREET | BRIDGE)  FROM  expression TO  expression;
polygonOutput: (WATER | BUILDING) AT expression expression expression expression;

// Expressions
// We do not allow operations on position
expression: (firstOpExpr | position);
firstOpExpr: opExpr (OPERATOR opExpr)*; // The first op expression does not need parenthesis
opExpr: OPEN_PAREN opExpr (OPERATOR opExpr)* CLOSE_PAREN | positionAccess | token;
position: OPEN_PAREN  firstOpExpr  COMMA  firstOpExpr  CLOSE_PAREN;
positionAccess: NAME CHAIN_OP COORDINATE;
functionCall: functionName  OPEN_PAREN  expression  (COMMA  expression )* CLOSE_PAREN SEMICOLON;
token: NEGATIVE_NUMBER | POSITIVE_NUMBER | TRUE | FALSE | variableName;

// Misc.
// lazy hack to make it easier to differentiate between names while preventing using lexer modes
functionName: NAME;
parameterName: NAME;
variableName: NAME;
