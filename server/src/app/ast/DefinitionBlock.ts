import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import FunctionDeclaration from './FunctionDeclaration';
import VariableDeclaration from './statements/VariableDeclaration';
import { Range } from '../util/Range';

export default class DefinitionBlock extends ASTNode {
  readonly body: (FunctionDeclaration | VariableDeclaration)[];

  constructor(range: Range, body: (FunctionDeclaration | VariableDeclaration)[]) {
    super(range);
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitDefinitionBlock(this, t);
  }
}
