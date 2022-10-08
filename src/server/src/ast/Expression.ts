import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import CoordinateAccess from './CoordinateAccess';
import Position from './Position';

export default class Expression extends ASTNode {
  leftValue: CoordinateAccess /*evaluates to a number*/ | Position | TokenNode; // tokenNode could be a number or a variable name (if variable name, you would have to find that variables value)
  operator?: TokenNode;
  rightValue?: Expression;

  constructor(leftValue: CoordinateAccess | Position | TokenNode, operator?: TokenNode, rightValue?: Expression) {
    super();
    this.leftValue = leftValue;
    this.operator = operator;
    this.rightValue = rightValue;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitExpression(this, t);
  }
}
