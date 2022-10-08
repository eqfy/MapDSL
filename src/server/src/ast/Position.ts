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
    if (variableName && (xCoordinate || yCoordinate)) {
      throw new Error('if a variable name is specified, then the (expression,expression) should not be');
    }
    if (!variableName && ((yCoordinate && !xCoordinate) || (!yCoordinate && xCoordinate))) {
      throw new Error('if a (x,y) is specified, then both x and y must be specified');
    }
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.variableName = variableName;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitPosition(this, t);
  }
}
