import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import Expression from '../expressions/Expression';
import { Range } from '../../util/Range';
import Statement from './Statement';
export default class FunctionCall extends Statement {
  readonly name: TokenNode;
  readonly inputValues: Expression[];

  constructor(range: Range, name: TokenNode, inputValues: Expression[]) {
    super(range);
    this.name = name;
    this.inputValues = inputValues;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitFunctionCall(this, t);
  }
}
