import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import FunctionCall from './FunctionCall';
import CreateMarker from './CreateMarker';
import CreatePolyline from './CreatePolyline';
import VariableDeclaration from './VariableDeclaration';
import VariableAssignment from './VariableAssignment';

export default class LoopBlock extends ASTNode {
  readonly loopNumber: TokenNode;
  readonly body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolyline | FunctionCall)[];

  constructor(
    loopNumber: TokenNode,
    body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolyline | FunctionCall)[]
  ) {
    super();
    this.loopNumber = loopNumber;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitLoopBlock(this, t);
  }
}
