import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import Position from './Position';

export default class CreateMarker extends ASTNode {
  readonly markerType: TokenNode;
  readonly position: Position;

  constructor(markerType: TokenNode, position: Position) {
    super();
    this.markerType = markerType;
    this.position = position;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCreateMarker(this, t);
  }
}
