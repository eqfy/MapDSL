import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import Statement from './statements/Statement';
import { Range } from '../util/Range';
export default class OutputBlock extends ASTNode {
  readonly body: Statement[];

  constructor(range: Range, body: Statement[]) {
    super(range);
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOutputBlock(this, t);
  }
}
