// all commented out properties will be implemented later if we need them for syntax highlighting or some other reason

import { ASTTokenType, ASTType } from './ASTTypes';
import { Visitor } from './Visitor';

export interface ASTNode {
  type: ASTType | ASTTokenType;
  accept<T, U>(v: Visitor<T, U>, t: T): U;
}

export function isASTNode(node: unknown): node is ASTNode {
  return isObject(node) && 'type' in node;
}

export function isASTTokenNode(node: unknown): node is ASTTokenNode {
  return isASTNode(node) && 'tokenValue' in node && 'range' in node;
}

export function isObject(object: unknown): object is object {
  return typeof object === 'object' && !Array.isArray(object) && object !== null;
}

export interface Range {
  zeroIndexStart: number;
  zeroIndexEnd: number;
}

export interface ASTTokenNode extends ASTNode {
  type: ASTTokenType;
  tokenValue: string;
  range: Range;
}

export interface ProgramNode extends ASTNode {
  type: 'Program';
  definitionBlock?: DefinitionBlockNode;
  outputBlock: OutputBlockNode;
}

export interface DefinitionBlockNode extends ASTNode {
  type: 'DefinitionBlock';
  // definitionStart: ASTTokenNode;
  // definitionEnd: ASTTokenNode;
  body: (FunctionDeclarationNode | VariableDeclarationNode)[];
}

export interface OutputBlockNode extends ASTNode {
  type: 'OutputBlock';
  // outputStart: ASTTokenNode;
  // outputEnd: ASTTokenNode;
  body: (StatementNode | LoopBlockNode)[];
}

export interface FunctionDeclarationNode extends ASTNode {
  type: 'FunctionDeclaration';
  name: ASTTokenNode;
  //openParen: ASTTokenNode;
  inputVariables: ASTTokenNode[];
  //commas: ASTTokenNode[];
  //closeParen: ASTTokenNode;
  //openCurly: ASTTokenNode;
  body: (StatementNode | LoopBlockNode)[];
}

export function isFunctionDeclarationNode(node: ASTNode): node is FunctionDeclarationNode {
  return isASTNode(node) && node.type === 'FunctionDeclarationNode';
}

export type StatementNode = VariableDeclarationNode | VariableAssignmentNode | CreateCallNode | FunctionCallNode;

export interface VariableDeclarationNode extends ASTNode {
  isGlobalConstant: boolean;
  type: 'VariableDeclaration';
  //variableStart: ASTTokenNode;
  name: ASTTokenNode;
  //equalsOperator: ASTTokenNode;
  value: ExpressionNode;
  // semiColon?: ASTTokenNode;
}

export function isVariableDeclarationNode(node: ASTNode): node is VariableDeclarationNode {
  return isASTNode(node) && node.type === 'VariableDeclaration';
}

export interface LoopBlockNode extends ASTNode {
  type: 'LoopBlock';
  //loopStart: ASTTokenNode;
  loopNumber: ASTTokenNode;
  //loopTimes: ASTTokenNode;
  body: StatementNode[]; // does not allow embedded loops right now
  //loopEnd: ASTTokenNode;
}

export type ExpressionNode =
  | (ASTNode & {
      type: 'Expression';
      leftValue: ExpressionNode;
      operator: ASTTokenNode;
      rightValue: ExpressionNode;
    })
  | PositionNode
  | PositionAccessNode
  | ASTTokenNode;

export interface PositionNode extends ASTNode {
  type: 'Position';
  //openParen: ASTTokenNode;
  xCoordinate?: ExpressionNode;
  //comma: ASTTokenNode;
  yCoordinate?: ExpressionNode;
  variableName?: ASTTokenNode;
  //closeParen: ASTTokenNode;
}

export interface PositionAccessNode extends ASTNode {
  type: 'PositionAccess';
  variableName: ASTTokenNode;
  //chainOperator: ASTTokenNode;
  coordinate: ASTTokenNode;
}

export interface VariableAssignmentNode extends ASTNode {
  type: 'VariableAssignment';
  name: ASTTokenNode;
  // equalsOperator: ASTTokenNode;
  value: ExpressionNode;
}

export interface CreateCallNode extends ASTNode {
  type: 'CreateCall';
  //createStart: ASTTokenNode;
  value: MarkerOutputNode | StreetOutputNode;
}

export interface MarkerOutputNode extends ASTNode {
  type: 'MarkerOutput';
  markerType: ASTTokenNode;
  //atToken: ASTTokenNode;
  position: PositionNode;
}

export interface StreetOutputNode extends ASTNode {
  type: 'StreetOutput';
  streetType: ASTTokenNode;
  //fromToken: ASTTokenNode;
  startPosition: PositionNode;
  //toToken: ASTTokenNode;
  endPosition: PositionNode;
}

export interface FunctionCallNode extends ASTNode {
  type: 'FunctionCall';
  name: ASTTokenNode;
  // openParen: ASTTokenNode;
  inputValues: ExpressionNode[];
  //commas: ASTTokenNode[];
  //closeParen: ASTTokenNode;
}
