import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import Statement from './statements/Statement';

export default class OutputBlock extends ASTNode {
  readonly body: Statement[];

  constructor(body: Statement[]) {
    super();
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOutputBlock(this, t);
  }
}
