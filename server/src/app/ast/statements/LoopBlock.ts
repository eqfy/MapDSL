import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import Statement from './Statement';
import { Range } from '../../util/Range';
export default class LoopBlock extends Statement {
  readonly loopNumber: TokenNode;
  readonly body: Statement[];

  constructor(range: Range,loopNumber: TokenNode, body: Statement[]) {
    super(range);
    this.loopNumber = loopNumber;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitLoopBlock(this, t);
  }
}
