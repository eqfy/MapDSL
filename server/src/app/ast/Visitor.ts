// See https://refactoring.guru/design-patterns/visitor/typescript/example
import Program from './Program';
import DefinitionBlock from './DefinitionBlock';
import OutputBlock from './OutputBlock';
import FunctionDeclaration from './FunctionDeclaration';
import VariableDeclaration from './statements/VariableDeclaration';
import VariableAssignment from './statements/VariableAssignment';
import CreatePolyline from './statements/CreatePolyline';
import FunctionCall from './expressions/FunctionCall';
import LoopBlock from './statements/LoopBlock';
import Expression from './expressions/Expression';
import Position from './expressions/Position';
import CoordinateAccess from './expressions/CoordinateAccess';
import TokenNode from './expressions/TokenNode';
import ASTNode from './ASTNode';
import OpExpression from './expressions/OpExpression';
import CreateMarker from "./statements/CreateMarker";

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

  visitOpExpression(n: OpExpression, t: T): U;

  visitPosition(n: Position, t: T): U;

  visitCoordinateAccess(n: CoordinateAccess, t: T): U;

  visitTokenNode(n: TokenNode, t: T): U;

  // Dummy visit function for defaultResult() in parseToASTVisitor.ts
  visitAST(n: ASTNode, t: T): U;
}
