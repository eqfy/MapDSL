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
statement: (localVariableDeclaration | variableAssignment | createCall | loopBlock | ifElseBlock | expression);

// Loop Block
loopBlock: LOOP  POSITIVE_NUMBER  TIMES  statement+  END_LOOP;

// Control Flow Block
ifElseBlock: IF firstOpExpr THEN branchBody (ELSE_IF firstOpExpr THEN branchBody)* (ELSE branchBody)? END_IF;
branchBody: statement+;

// Variables
variableAssignment: variableName  EQ  expression SEMICOLON;
localVariableDeclaration: VARIABLE  variableName  EQ  expression SEMICOLON;
globalVariableDeclaration: CONSTANT variableName EQ expression SEMICOLON;

// Outputs
createCall: CREATE  (markerOutput | streetOutput) SEMICOLON;
markerOutput: (BUS_STOP | STOP_SIGN | TRAFFIC_LIGHT | TRAIN_STOP)  AT expression;
streetOutput: (HIGHWAY | STREET | BRIDGE)  FROM  expression TO  expression;

// Expressions
// We do not allow operations on position
expression: (firstOpExpr | opExpr | position);
firstOpExpr: opExpr (OPERATOR opExpr)*; // The first op expression does not need parenthesis
opExpr: OPEN_PAREN opExpr (OPERATOR opExpr)* CLOSE_PAREN | positionAccess | functionCall | token;
position: (OPEN_PAREN  firstOpExpr  COMMA  firstOpExpr  CLOSE_PAREN );
positionAccess: NAME CHAIN_OP COORDINATE;
functionCall: functionName  OPEN_PAREN  expression  (COMMA  expression )* CLOSE_PAREN SEMICOLON;
token: variableName | NEGATIVE_NUMBER | POSITIVE_NUMBER | TRUE | FALSE;

// Misc.
// lazy hack to make it easier to differentiate between names while preventing using lexer modes
functionName: NAME;
parameterName: NAME;
variableName: NAME;
