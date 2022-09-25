import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { MapGeneratorParserVisitor } from './MapGeneratorParserVisitor';
import ASTNode from './ASTNode';
import { AbstractParseTreeVisitor, ErrorNode, ParseTree, RuleNode } from 'antlr4ts/tree';

export class ParseToASTVisitor extends AbstractParseTreeVisitor<ASTNode> implements MapGeneratorParserVisitor<ASTNode> {
  protected defaultResult(): ASTNode {
    return new ASTNode();
  }
}
