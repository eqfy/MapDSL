import Expression from './Expression';
import { Visitor } from '../Visitor';
import TokenNode from './TokenNode';

export default class OpExpression extends Expression {
  leftExpression: Expression;
  operator: TokenNode;
  rightExpression: Expression;

  constructor(leftExpression: Expression, operator: TokenNode, rightExpression: Expression) {
    super();
    this.leftExpression = leftExpression;
    this.operator = operator;
    this.rightExpression = rightExpression;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOpExpression(this, t);
  }
}
