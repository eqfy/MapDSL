import { ASTNode, isASTNode, isASTTokenNode } from '../parser/AST';

export function traverseAST(astNode: ASTNode, actionOnNode: (node: ASTNode) => void): void {
  if (!isASTNode(astNode)) return;

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
