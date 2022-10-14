import { Visitor } from '../Visitor';
import TokenNode from './TokenNode';
import Expression from './Expression';
import { OperableExpr } from './OperableExpr';
import { Range } from '../../util/Range';
export default class FunctionCall extends OperableExpr {
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
