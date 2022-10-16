import { Visitor } from '../Visitor';
import Statement from './Statement';
import { Range } from '../../util/Range';
import Expression from "../expressions/Expression";
export default class LoopBlock extends Statement {
  readonly loopNumber: Expression;
  readonly body: Statement[];

  constructor(range: Range,loopNumber: Expression, body: Statement[]) {
    super(range);
    this.loopNumber = loopNumber;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitLoopBlock(this, t);
  }
}
