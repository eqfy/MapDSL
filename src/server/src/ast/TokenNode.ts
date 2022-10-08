import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import { Range } from './Range';

export default class TokenNode extends ASTNode {
  readonly tokenValue: string; // can be number, operator, variable name, function name, ... any important individual string
  readonly range: Range;

  constructor(tokenValue: string, range: Range) {
    super();
    this.tokenValue = tokenValue;
    this.range = range;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitTokenNode(this, t);
  }
}
