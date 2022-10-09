import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './expressions/TokenNode';
import Statement from './statements/Statement';

export default class FunctionDeclaration extends ASTNode {
  readonly name: TokenNode;
  readonly inputVariables?: TokenNode[];
  readonly body: Statement[];

  constructor(name: TokenNode, inputVariables: TokenNode[], body: Statement[]) {
    super();
    this.name = name;
    this.inputVariables = inputVariables;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitFunctionDeclaration(this, t);
  }
}
