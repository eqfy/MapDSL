import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import Expression from '../expressions/Expression';
import Statement from './Statement';

export default class VariableAssignment extends Statement {
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
