import {
  ASTNode,
  ASTTokenNode,
  CreateCallNode,
  DefinitionBlockNode,
  ExpressionNode,
  FunctionCallNode,
  FunctionDeclarationNode,
  LoopBlockNode,
  MarkerOutputNode,
  OutputBlockNode,
  PositionAccessNode,
  PositionNode,
  ProgramNode,
  StatementNode,
  StreetOutputNode,
  VariableAssignmentNode,
  VariableDeclarationNode
} from './AST';

// See https://refactoring.guru/design-patterns/visitor/typescript/example
export interface Visitor<T = void, U = void> {
  visitProgramNode(n: ProgramNode, t: T): U;
  visitDefinitionBlockNode(n: DefinitionBlockNode, t: T): U;
  visitOutputBlockNode(n: OutputBlockNode, t: T): U;
  visitFunctionDeclarationNode(n: FunctionDeclarationNode, t: T): U;
  visitStatementNode(n: StatementNode, t: T): U;
  visitVariableDeclarationNode(n: VariableDeclarationNode, t: T): U;
  visitLoopBlockNode(n: LoopBlockNode, t: T): U;
  visitExpressionNode(n: ExpressionNode, t: T): U;
  visitPositionNode(n: PositionNode, t: T): U;
  visitPositionAccessNode(n: PositionAccessNode, t: T): U;
  visitVariableAssignmentNode(n: VariableAssignmentNode, t: T): U;
  visitCreateCallNode(n: CreateCallNode, t: T): U;
  visitMarkerOutputNode(n: MarkerOutputNode, t: T): U;
  visitStreetOutputNode(n: StreetOutputNode, t: T): U;
  visitFunctionCallNode(n: FunctionCallNode, t: T): U;
  visitASTTokenNode(n: ASTTokenNode, t: T): U;

  // Dummy visit function for defaultResult() in parseToASTVisitor.ts
  visitASTNode(n: ASTNode, t: T): U;
}
