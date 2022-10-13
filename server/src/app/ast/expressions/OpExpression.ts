import Expression from './Expression';
import { Visitor } from '../Visitor';
import TokenNode from './TokenNode';
import {OperableExpr} from "./OperableExpr";
import { Range } from '../../util/Range';
export default class OpExpression extends Expression {
  leftExpression: OperableExpr;
  operator: TokenNode;
  rightExpression: OpExpression | OperableExpr;

  constructor(range: Range, leftExpression: OperableExpr, operator: TokenNode, rightExpression: OpExpression | OperableExpr) {
    super(range);
    this.leftExpression = leftExpression;
    this.operator = operator;
    this.rightExpression = rightExpression;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOpExpression(this, t);
  }
}
