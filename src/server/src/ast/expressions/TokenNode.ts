import { Visitor } from "../Visitor";
import { Range } from "../Range";
import { OperableExpr } from "./OperableExpr";

export default class TokenNode extends OperableExpr {
  // A token represents any atomic final value
  // It can be number, operator, variable name, function name, ... any important individual string
  readonly tokenValue: string;
  readonly range: Range;

  constructor(tokenValue: string, range: Range) {
    super();
    this.tokenValue = tokenValue;
    this.range = range;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitTokenNode(this, t);
  }
}
