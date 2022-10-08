
import { Visitor } from '../Visitor';
import DefinitionBlock from '../DefinitionBlock';
import TokenNode from '../TokenNode';
import OutputBlock from '../OutputBlock';
import VariableAssignment from '../VariableAssignment';
import CreatePolyline from '../CreatePolyline';
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
import {CreatePosition, CreateStatement} from "../CreateStatement";

export class OutputVisitor implements Visitor<void, CreatePosition | number | void | CreateStatement> {
  private constantTable = new Map<string, CreatePosition | number>(); // always global
  private variableTable = new Map<string, CreatePosition | number>();
  private functionTable = new Map<string, FunctionDeclaration>();
  private createStatements: CreateStatement[] = [];

  // if you need the value of a tokenNode, either use the value itself (if simple to do so, example: number), otherwise, just call accept on the tokenNode (for example, getting the value of a variable name), and trust you'll get back the correct result
  // if you need any helpers, just create another file

  visitProgram(n: Program, t: void): void {
    // This might be the only type check needed for AST
    //n.definitionBlock?.accept(this, t);
    //n.outputBlock.accept(this, t);
  }

  visitDefinitionBlock(n: DefinitionBlock, t: void): void {
    // 1 -- AIDAN (maybe maxwell)
    // loop through body and call accept functions on each relevant element
    return undefined;
  }

  visitOutputBlock(n: OutputBlock, t: void): void {
    // 1 -- AIDAN (maybe maxwell)
    // loop through body and call accept functions on each relevant element
    return undefined;
  }

  visitVariableDeclaration(n: VariableDeclaration, t: void): void {
    // 2 -- AIDAN (maybe eric)
    // put into variable or constant maps (according to the n.isGlobalConstant class field)
    return undefined;
  }

  visitFunctionDeclaration(n: FunctionDeclaration, t: void): void {
    // 2 -- AIDAN (maybe eric)
    // put into functionTable
    return undefined;
  }

  visitLoopBlock(n: LoopBlock, t: void): void {
    // 3 -- MICHAEL
    // loop n.loopNumber times, for each body statement call accept
    return undefined;
  }

  visitFunctionCall(n: FunctionCall, t: void): CreateStatement | void {
    // 3 --- ERIC
    // eric
    return undefined;
  }

  visitExpression(n: Expression, t: void): CreatePosition | number {
    // 3 -- MICHAEL
    // if no operator return leftvalue (evaluated)
    // else return leftValue (operator) rightValue.accept();
    // recursively evaluate the expression (assume proper inputs)
    return 0;
  }

  visitPosition(n: Position, t: void): CreatePosition | void {
    // TODO remove void // 4 -- MAXWELL
    // create the position
    return undefined;
  }

  visitVariableAssignment(n: VariableAssignment, t: void): void {
    // 3 -- MICHAEL
    if (this.constantTable.get(n.name.tokenValue)) {
      this.constantTable.set(n.name.tokenValue, n.value.accept(this, t));
    }
    if (this.variableTable.get(n.name.tokenValue)) {
      this.variableTable.set(n.name.tokenValue, n.value.accept(this, t));
    }
    return undefined;
  }

  visitCoordinateAccess(n: CoordinateAccess, t: void): number {
    // 4 -- MAXWELL
    // variableNameHere.x
    // variableNameHere.y
    // ie accessing a coordinate from a variable
    return 0;
  }

  visitCreateMarker(n: CreateMarker, t: void): CreateStatement | void {
    // TODO remove void // 5 -- KYLE
    // create the marker and return it
    return undefined;
  }

  visitCreatePolyline(n: CreatePolyline, t: void): CreateStatement | void {
    // TODO remove void // 5 -- KYLE
    // create the street etc and return it
    return undefined;
  }

  visitTokenNode(n: TokenNode, t: void): void {
    // 5 -- KYLE
    // kyle
    return undefined;
  }

  visitAST(n: ASTNode, t: void): void {
    // dummy
    return undefined;
  }
}
