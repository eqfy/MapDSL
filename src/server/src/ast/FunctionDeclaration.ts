import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import TokenNode from './TokenNode';
import VariableDeclaration from './VariableDeclaration';
import VariableAssignment from './VariableAssignment';
import CreateMarker from './CreateMarker';
import CreatePolyline from './CreatePolyline';
import FunctionCall from './FunctionCall';
import LoopBlock from './LoopBlock';

export default class FunctionDeclaration extends ASTNode {
  readonly name: TokenNode;
  readonly inputVariables?: TokenNode[];
  readonly body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolyline | FunctionCall | LoopBlock)[];

  constructor(
    name: TokenNode,
    inputVariables: TokenNode[],
    body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolyline | FunctionCall | LoopBlock)[]
  ) {
    super();
    this.name = name;
    this.inputVariables = inputVariables;
    this.body = body;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitFunctionDeclaration(this, t);
  }
}
