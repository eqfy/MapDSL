import { Visitor } from "../Visitor";
import TokenNode from "../expressions/TokenNode";
import Statement from "./Statement";

export default class LoopBlock extends Statement {
  readonly loopNumber: TokenNode;
  readonly body: Statement[];

  constructor(
    loopNumber: TokenNode,
    body: Statement[]
  ) {
    super();
    this.loopNumber = loopNumber;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitLoopBlock(this, t);
  }
}
