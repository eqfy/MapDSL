import {
  ASTNode,
  ASTTokenNode,
  FunctionDeclarationNode,
  isASTTokenNode,
  LoopBlockNode,
  StatementNode,
} from '../ast/AST';
import { traverseAST } from '../util/traverseAST';

export default class FunctionDeclaration {
  readonly functionDeclaration: FunctionDeclarationNode;
  readonly functionName: string;
  readonly inputNames: string[];
  readonly bodyOrder: (StatementNode | LoopBlockNode)[];

  constructor(functionDeclaration: FunctionDeclarationNode) {
    this.functionDeclaration = functionDeclaration;
    this.functionName = functionDeclaration.name.tokenValue;
    this.inputNames = [];
    this.bodyOrder = functionDeclaration.body;
    this.populateFunctionDeclarationInfo();
  }

  private populateFunctionDeclarationInfo(): void {
    traverseAST(this.functionDeclaration, this.actionOnNode.bind(this));
  }

  private actionOnNode(node: ASTNode | ASTTokenNode): void {
    if (isASTTokenNode(node) && node.type === 'ParameterName') {
      this.inputNames.push(node.tokenValue);
    }
  }
}
