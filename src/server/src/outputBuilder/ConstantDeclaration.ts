import { ExpressionNode, VariableDeclarationNode } from '../ast/AST';

export default class ConstantDeclaration {
  readonly constantDeclaration: VariableDeclarationNode;
  readonly constantName: string;
  private constantValue: ExpressionNode;

  constructor(constantDeclaration: VariableDeclarationNode) {
    this.constantDeclaration = constantDeclaration;
    this.constantName = constantDeclaration.name.tokenValue;
    this.constantValue = constantDeclaration.value;
  }
}
