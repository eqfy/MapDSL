import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import Position from './Position';

export default class CreatePolyline extends ASTNode {
  readonly streetType: TokenNode;
  readonly startPosition: Position;
  readonly endPosition: Position;

  constructor(streetType: TokenNode, startPosition: Position, endPosition: Position) {
    super();
    this.streetType = streetType;
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCreatePolyline(this, t);
  }
}
