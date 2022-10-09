import ASTNode from "./ASTNode";
import { Visitor } from "./Visitor";
import DefinitionBlock from "./DefinitionBlock";
import OutputBlock from "./OutputBlock";

export default class Program extends ASTNode {
  readonly definitionBlock?: DefinitionBlock;
  readonly outputBlock: OutputBlock;

  constructor(outputBlock: OutputBlock, definitionBlock?: DefinitionBlock) {
    super();
    this.definitionBlock = definitionBlock;
    this.outputBlock = outputBlock;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitProgram(this, t);
  }
}
