import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import Expression from './Expression';

export default class VariableDeclaration extends ASTNode {
  readonly isGlobalConstant: boolean;
  readonly name: TokenNode;
  readonly value: Expression;

  constructor(isGlobalConstant: boolean, name: TokenNode, value: Expression) {
    super();
    this.isGlobalConstant = isGlobalConstant;
    this.name = name;
    this.value = value;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitVariableDeclaration(this, t);
  }
}
