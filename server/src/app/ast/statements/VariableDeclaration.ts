import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import Expression from '../expressions/Expression';
import Statement from './Statement';
import { Range } from '../../util/Range';
export default class VariableDeclaration extends Statement {
  readonly isGlobalConstant: boolean;
  readonly name: TokenNode;
  readonly value: Expression;

  constructor(range: Range, isGlobalConstant: boolean, name: TokenNode, value: Expression) {
    super(range);
    this.isGlobalConstant = isGlobalConstant;
    this.name = name;
    this.value = value;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitVariableDeclaration(this, t);
  }
}
