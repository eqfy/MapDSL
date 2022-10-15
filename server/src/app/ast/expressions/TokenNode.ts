import { Visitor } from '../Visitor';
import { Range } from '../../util/Range';
import { OperableExpr } from './OperableExpr';

export default class TokenNode extends OperableExpr {
  // A token represents any atomic final value
  // It can be number, operator, variable name, function name, ... any important individual string
  readonly tokenValue: string;
  readonly targetValueType: string;

  constructor(range: Range, tokenValue: string, targetValue: TokenCtxTargetValueType) {
    super(range);
    this.tokenValue = tokenValue;
    this.targetValueType = targetValue;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitTokenNode(this, t);
  }
}

export type TokenCtxTargetValueType = 'string' | 'number' | 'assignedValue' | 'truthValue';
