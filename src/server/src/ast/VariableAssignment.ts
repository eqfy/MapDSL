import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import Expression from './Expression';

export default class VariableAssignment extends ASTNode {
  readonly name: TokenNode;
  readonly value: Expression;

  constructor(name: TokenNode, value: Expression) {
    super();
    this.name = name;
    this.value = value;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitVariableAssignment(this, t);
  }
}
