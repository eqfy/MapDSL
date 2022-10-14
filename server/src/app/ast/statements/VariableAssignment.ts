import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import Expression from '../expressions/Expression';
import Statement from './Statement';
import { Range } from '../../util/Range';
export default class VariableAssignment extends Statement {
  readonly name: TokenNode;
  readonly value: Expression;

  constructor(range: Range, name: TokenNode, value: Expression) {
    super(range);
    this.name = name;
    this.value = value;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitVariableAssignment(this, t);
  }
}
