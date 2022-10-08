import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import Expression from './Expression';

export default class FunctionCall extends ASTNode {
  readonly name: TokenNode;
  readonly inputValues: Expression[];

  constructor(name: TokenNode, inputValues: Expression[]) {
    super();
    this.name = name;
    this.inputValues = inputValues;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitFunctionCall(this, t);
  }
}
