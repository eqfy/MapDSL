import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';

export default class CoordinateAccess extends ASTNode {
  readonly variableName: TokenNode;
  readonly coordinate: TokenNode;

  constructor(variableName: TokenNode, coordinate: TokenNode) {
    super();
    this.variableName = variableName;
    this.coordinate = coordinate;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCoordinateAccess(this, t);
  }
}
