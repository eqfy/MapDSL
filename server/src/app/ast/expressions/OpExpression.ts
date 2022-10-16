import { Visitor } from '../Visitor';
import TokenNode from './TokenNode';
import {OperableExpr} from "./OperableExpr";
import { Range } from '../../util/Range';
export default class OpExpression extends OperableExpr {
  readonly expressions: OperableExpr[];
  readonly operators: TokenNode[];

  constructor(range: Range, expressions: OperableExpr[], operators: TokenNode[]) {
    super(range);
    this.expressions = expressions
    this.operators = operators
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOpExpression(this, t);
  }
}
