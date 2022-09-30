import {
  ProgramNode,
  DefinitionBlockNode,
  OutputBlockNode,
  FunctionDeclarationNode,
  StatementNode,
  VariableDeclarationNode,
  LoopBlockNode,
  ExpressionNode,
  PositionNode,
  PositionAccessNode,
  VariableAssignmentNode,
  CreateCallNode,
  MarkerOutputNode,
  StreetOutputNode,
  FunctionCallNode,
  ASTNode,
  ASTTokenNode
} from './AST';
import { OutputVisitorContext } from './OutputVisitorContext';
import { Visitor } from './Visitor';

export class OutputVisitor implements Visitor<OutputVisitorContext> {
  // Note, it is no longer necessary to check that n is a specific type of node
  // Instead, the check is handled by the visitor pattern
  // (specifically by using the correct function name)
  visitProgramNode(n: ProgramNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitDefinitionBlockNode(n: DefinitionBlockNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitOutputBlockNode(n: OutputBlockNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitFunctionDeclarationNode(n: FunctionDeclarationNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitStatementNode(n: StatementNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitVariableDeclarationNode(n: VariableDeclarationNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitLoopBlockNode(n: LoopBlockNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitExpressionNode(n: ExpressionNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitPositionNode(n: PositionNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitPositionAccessNode(n: PositionAccessNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitVariableAssignmentNode(n: VariableAssignmentNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitCreateCallNode(n: CreateCallNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitMarkerOutputNode(n: MarkerOutputNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitStreetOutputNode(n: StreetOutputNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitFunctionCallNode(n: FunctionCallNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitASTTokenNode(n: ASTTokenNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
  visitASTNode(n: ASTNode, t: OutputVisitorContext): void {
    throw new Error('Method not implemented.');
  }
}
