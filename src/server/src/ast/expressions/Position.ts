import { Visitor } from "../Visitor";
import Expression from "./Expression";

export default class Position extends Expression {
  readonly xCoordinate?: Expression;
  readonly yCoordinate?: Expression;

  constructor(xCoordinate: Expression, yCoordinate: Expression) {
    super();
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitPosition(this, t);
  }
}
