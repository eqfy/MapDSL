import Expression from './Expression';
import { Visitor } from '../Visitor';
import TokenNode from './TokenNode';
import {OperableExpr} from "./OperableExpr";

export default class OpExpression extends Expression {
  leftExpression: OperableExpr;
  operator: TokenNode;
  rightExpression: OpExpression | OperableExpr;

  constructor(leftExpression: OperableExpr, operator: TokenNode, rightExpression: OpExpression | OperableExpr) {
    super();
    this.leftExpression = leftExpression;
    this.operator = operator;
    this.rightExpression = rightExpression;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOpExpression(this, t);
  }
}
