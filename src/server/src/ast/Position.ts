import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import Expression from './Expression';

export default class Position extends ASTNode {
  readonly xCoordinate?: Expression;
  readonly yCoordinate?: Expression;
  readonly variableName?: TokenNode;

  constructor(xCoordinate?: Expression, yCoordinate?: Expression, variableName?: TokenNode) {
    super();
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.variableName = variableName;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitPosition(this, t);
  }
}
