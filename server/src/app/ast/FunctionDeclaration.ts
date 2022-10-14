import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './expressions/TokenNode';
import Statement from './statements/Statement';
import { Range } from '../util/Range';
export default class FunctionDeclaration extends ASTNode {
  readonly name: TokenNode;
  readonly inputVariables?: TokenNode[];
  readonly body: Statement[];

  constructor(range: Range, name: TokenNode, inputVariables: TokenNode[], body: Statement[]) {
    super(range);
    this.name = name;
    this.inputVariables = inputVariables;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitFunctionDeclaration(this, t);
  }
}
