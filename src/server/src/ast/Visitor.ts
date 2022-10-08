// See https://refactoring.guru/design-patterns/visitor/typescript/example
import Program from './Program';
import DefinitionBlock from './DefinitionBlock';
import OutputBlock from './OutputBlock';
import FunctionDeclaration from './FunctionDeclaration';
import VariableDeclaration from './VariableDeclaration';
import VariableAssignment from './VariableAssignment';
import CreateMarker from './CreateMarker';
import CreatePolyline from './CreatePolyline';
import FunctionCall from './FunctionCall';
import LoopBlock from './LoopBlock';
import Expression from './Expression';
import Position from './Position';
import CoordinateAccess from './CoordinateAccess';
import TokenNode from './TokenNode';
import ASTNode from './ASTNode';

export interface Visitor<T = void, U = void> {
  visitProgram(n: Program, t: T): U;

  visitDefinitionBlock(n: DefinitionBlock, t: T): U;

  visitOutputBlock(n: OutputBlock, t: T): U;

  visitFunctionDeclaration(n: FunctionDeclaration, t: T): U;

  visitVariableDeclaration(n: VariableDeclaration, t: T): U;

  visitVariableAssignment(n: VariableAssignment, t: T): U;

  visitCreateMarker(n: CreateMarker, t: T): U;

  visitCreatePolyline(n: CreatePolyline, t: T): U;

  visitFunctionCall(n: FunctionCall, t: T): U;

  visitLoopBlock(n: LoopBlock, t: T): U;

  visitExpression(n: Expression, t: T): U;

  visitPosition(n: Position, t: T): U;

  visitCoordinateAccess(n: CoordinateAccess, t: T): U;

  visitTokenNode(n: TokenNode, t: T): U;

  // Dummy visit function for defaultResult() in parseToASTVisitor.ts
  visitAST(n: ASTNode, t: T): U;
}
