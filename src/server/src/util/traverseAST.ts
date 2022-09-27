import { ASTNode, ASTTokenNode, isASTNode, isASTTokenNode } from '../parser/AST';

export function traverseAST(astNode: ASTNode | ASTTokenNode, actionOnNode: (node: ASTNode | ASTTokenNode) => void): void {
  actionOnNode(astNode);
  for (const propertyValue of Object.values(astNode)) {
    if (!(Array.isArray(propertyValue) || isASTTokenNode(propertyValue) || isASTNode(propertyValue))) continue;

    if (Array.isArray(propertyValue)) {
      for (const listAstNode of Object.values(propertyValue)) {
        traverseAST(listAstNode, actionOnNode);
      }
    } else {
      traverseAST(propertyValue, actionOnNode);
    }
  }
}
