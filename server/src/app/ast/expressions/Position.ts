import { Visitor } from '../Visitor';
import Expression from './Expression';
import { Range } from '../../util/Range';
export default class Position extends Expression {
  readonly xCoordinate: Expression;
  readonly yCoordinate: Expression;

  constructor(range: Range, xCoordinate: Expression, yCoordinate: Expression) {
    super(range);
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitPosition(this, t);
  }
}
