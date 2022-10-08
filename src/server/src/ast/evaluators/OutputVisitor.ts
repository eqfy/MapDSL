import { OutputVisitorContext } from './OutputVisitorContext';
import { Visitor } from '../Visitor';
import DefinitionBlock from '../DefinitionBlock';
import TokenNode from '../TokenNode';
import OutputBlock from '../OutputBlock';
import VariableAssignment from '../VariableAssignment';
import CreatePolygon from '../CreatePolygon';
import CoordinateAccess from '../CoordinateAccess';
import FunctionDeclaration from '../FunctionDeclaration';
import LoopBlock from '../LoopBlock';
import Expression from '../Expression';
import ASTNode from '../ASTNode';
import CreateMarker from '../CreateMarker';
import VariableDeclaration from '../VariableDeclaration';
import FunctionCall from '../FunctionCall';
import Program from '../Program';
import Position from '../Position';

export class OutputVisitor implements Visitor<OutputVisitorContext> {
  visitProgram(n: Program, t: OutputVisitorContext): void {
    // This might be the only type check needed for AST s
    n.definitionBlock?.accept(this, t);
    n.outputBlock.accept(this, t);
  }

  visitAST(n: ASTNode, t: OutputVisitorContext): void {
    return undefined;
  }

  visitTokenNode(n: TokenNode, t: OutputVisitorContext): void {
    return undefined;
  }

  visitCoordinateAccess(n: CoordinateAccess, t: OutputVisitorContext): void {
    return undefined;
  }

  visitCreateMarker(n: CreateMarker, t: OutputVisitorContext): void {
    return undefined;
  }

  visitCreatePolygon(n: CreatePolygon, t: OutputVisitorContext): void {
    return undefined;
  }

  visitDefinitionBlock(n: DefinitionBlock, t: OutputVisitorContext): void {
    return undefined;
  }

  visitExpression(n: Expression, t: OutputVisitorContext): void {
    return undefined;
  }

  visitFunctionCall(n: FunctionCall, t: OutputVisitorContext): void {
    return undefined;
  }

  visitFunctionDeclaration(n: FunctionDeclaration, t: OutputVisitorContext): void {
    return undefined;
  }

  visitLoopBlock(n: LoopBlock, t: OutputVisitorContext): void {
    return undefined;
  }

  visitOutputBlock(n: OutputBlock, t: OutputVisitorContext): void {
    return undefined;
  }

  visitPosition(n: Position, t: OutputVisitorContext): void {
    return undefined;
  }

  visitVariableAssignment(n: VariableAssignment, t: OutputVisitorContext): void {
    return undefined;
  }

  visitVariableDeclaration(n: VariableDeclaration, t: OutputVisitorContext): void {
    return undefined;
  }
}
