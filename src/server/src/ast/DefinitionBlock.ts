import ASTNode from "./ASTNode";
import { Visitor } from "./Visitor";
import FunctionDeclaration from "./FunctionDeclaration";
import VariableDeclaration from "./statements/VariableDeclaration";

export default class DefinitionBlock extends ASTNode {
  readonly body: (FunctionDeclaration | VariableDeclaration)[];

  constructor(body: (FunctionDeclaration | VariableDeclaration)[]) {
    super();
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitDefinitionBlock(this, t);
  }
}
