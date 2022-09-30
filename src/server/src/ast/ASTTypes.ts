export type ASTTokenType =
  | 'ParameterName'
  | 'FunctionName'
  | 'LoopNumber'
  | 'MarkerType'
  | 'StreetType'
  | 'VariableName'
  | 'Operator'
  | 'Number'
  | 'Coordinate';

export type ASTType =
  | 'Program'
  | 'DefinitionBlock'
  | 'OutputBlock'
  | 'FunctionDeclaration'
  | 'FunctionDeclarationNode'
  | 'VariableDeclaration'
  | 'LoopBlock'
  | 'Expression'
  | 'Position'
  | 'PositionAccess'
  | 'VariableAssignment'
  | 'CreateCall'
  | 'MarkerOutput'
  | 'StreetOutput'
  | 'FunctionCall';
