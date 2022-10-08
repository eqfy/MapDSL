import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import FunctionCall from './FunctionCall';
import CreateMarker from './CreateMarker';
import CreatePolygon from './CreatePolygon';
import VariableAssignment from './VariableAssignment';
import VariableDeclaration from './VariableDeclaration';
import LoopBlock from './LoopBlock';

export default class OutputBlock extends ASTNode {
  readonly body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall | LoopBlock)[];

  constructor(body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall | LoopBlock)[]) {
    super();
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitOutputBlock(this, t);
  }
}
