lexer grammar MapGeneratorLexer;

// (DEFAULT_MODE)
WS : [\r\n\t ]+ -> skip;
LINE_COMMENT : '//' ~[\r\n]* -> skip;
OPEN_CURLY : '{';
CLOSE_CURLY : '}';
OPEN_PAREN : '(';
CLOSE_PAREN : ')';
COMMA : ',';
CHAIN_OP : '.';
EQ: '=';
COORDINATE : [xy];
VARIABLE: 'VARIABLE';
CONSTANT: 'CONSTANT';
FUNCTION: 'FUNCTION';
DEFINITIONS: 'DEFINITIONS';
TO: 'to';
FROM: 'from';
AT : 'at';
AND: 'and';
HIGHWAY: 'highway';
STREET: 'street';
BRIDGE: 'bridge';
TIMES: 'TIMES';
CREATE: 'CREATE';
SEMICOLON: ';';
STOP: 'stop';
TRAIN: 'train';
TRAFFIC: 'traffic';
BUS: 'bus';
SIGN: 'sign';
LIGHT: 'light';
WATER: 'water';
BUILDING: 'building';
OUTPUT: 'OUTPUT';
END_OUTPUT: 'END_OUTPUT';
END_DEFINITION: 'END_DEFINITIONS';
LOOP: 'LOOP';
END_LOOP: 'END_LOOP';
IF: 'IF';
ELSE_IF: 'ELSE_IF';
ELSE: 'ELSE';
THEN: 'THEN';
END_IF: 'END_IF';
CANVAS: 'CANVAS';
SIZE: 'SIZE';
BY: 'by';
POSITIVE_NUMBER : [0-9]+;
NEGATIVE_NUMBER: '-' POSITIVE_NUMBER;
TRUE: 'true';
FALSE: 'false';
OPERATOR: [+-/] | '*' | '==' | '!=' | '>' | '<' | '>=' | '<=' | 'AND' | 'OR';
BUS_STOP: BUS WS STOP;
STOP_SIGN: STOP WS SIGN;
TRAFFIC_LIGHT: TRAFFIC WS LIGHT;
TRAIN_STOP: TRAIN WS STOP;
UNDERSCORE: '_';
CANVAS_SIZE: CANVAS UNDERSCORE SIZE;
NAME: [a-zA-Z][a-zA-Z0-9]*;
