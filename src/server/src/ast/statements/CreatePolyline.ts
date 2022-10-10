import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import CreateStatement from './CreateStatement';
import Expression from '../expressions/Expression';

export default class CreatePolyline extends CreateStatement {
  readonly streetType: TokenNode;
  readonly startPosition: Expression;
  readonly endPosition: Expression;

  constructor(streetType: TokenNode, startPosition: Expression, endPosition: Expression) {
    super();
    this.streetType = streetType;
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCreatePolyline(this, t);
  }
}
