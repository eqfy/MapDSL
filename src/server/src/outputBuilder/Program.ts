import {
  ASTNode,
  ASTTokenNode,
  DefinitionBlockNode,
  isASTTokenNode,
  isFunctionDeclarationNode,
  isVariableDeclarationNode,
  LoopBlockNode,
  OutputBlockNode,
  ProgramNode,
  StatementNode
} from '../parser/AST';
import { traverseAST } from '../util/traverseAST';
import FunctionDeclaration from './FunctionDeclaration';
import ConstantDeclaration from './ConstantDeclaration';

export default class Program {
  readonly program: ProgramNode;
  readonly definitionBlock?: DefinitionBlockNode;
  readonly outputBlock: OutputBlockNode;
  readonly globalConstants: Map<string, ConstantDeclaration>;
  readonly functionDeclarations: Map<string, FunctionDeclaration>;
  readonly outputInOrder: (StatementNode | LoopBlockNode)[];

  constructor(program: ASTNode) {
    if (!this.isProgram(program)) throw new Error('Input must be a program!');
    this.program = program;
    this.definitionBlock = this.program.definitionBlock;
    this.outputBlock = this.program.outputBlock;
    this.outputInOrder = this.outputBlock.body;
    this.globalConstants = new Map<string, ConstantDeclaration>();
    this.functionDeclarations = new Map<string, FunctionDeclaration>();
    this.populateProgramInfo();
  }

  private isProgram(astNode: ASTNode): astNode is ProgramNode {
    return astNode.type === 'Program';
  }

  private populateProgramInfo(): void {
    traverseAST(this.program, this.actionOnNode.bind(this));
  }

  private actionOnNode(node: ASTNode | ASTTokenNode): void {
    if (isASTTokenNode(node)) return;

    if (isVariableDeclarationNode(node) && node.isGlobalConstant) {
      this.globalConstants.set(node.name.tokenValue, new ConstantDeclaration(node));
    }

    if (isFunctionDeclarationNode(node)) {
      this.functionDeclarations.set(node.name.tokenValue, new FunctionDeclaration(node));
    }
  }
}
