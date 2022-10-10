import { Visitor } from '../Visitor';
import DefinitionBlock from '../DefinitionBlock';
import TokenNode from '../expressions/TokenNode';
import OutputBlock from '../OutputBlock';
import VariableAssignment from '../statements/VariableAssignment';
import CreatePolyline from '../statements/CreatePolyline';
import CoordinateAccess from '../expressions/CoordinateAccess';
import FunctionDeclaration from '../FunctionDeclaration';
import LoopBlock from '../statements/LoopBlock';
import Expression from '../expressions/Expression';
import ASTNode from '../ASTNode';
import CreateMarker from '../statements/CreateMarker';
import VariableDeclaration from '../statements/VariableDeclaration';
import FunctionCall from '../expressions/FunctionCall';
import Program from '../Program';
import Position from '../expressions/Position';
import OpExpression from '../expressions/OpExpression';
import CreateStatementBuilder from '../../CreateStatements/CreateStatementBuilder';
import { CreatePosition } from '../../CreateStatements/CreateStatementTypes';

// This type represents all values allowed in our language
type OutputVisitorReturnType = CreatePosition | number | string | void;

interface OutputVisitorContext {
  createStatementBuilder: CreateStatementBuilder;
  variableTable: Map<string, OutputVisitorReturnType>;
}

export class OutputVisitor implements Visitor<OutputVisitorContext, OutputVisitorReturnType> {
  private functionTable = new Map<string, FunctionDeclaration>(); // always global
  private constantTable = new Map<string, OutputVisitorReturnType>(); // always global

  // if you need the value of a tokenNode, either use the value itself (if simple to do so, example: number), otherwise, just call accept on the tokenNode (for example, getting the value of a variable name), and trust you'll get back the correct result
  // if you need any helpers, just create another file

  visitProgram(n: Program, t: OutputVisitorContext): void {
    // This might be the only type check needed for AST
    //n.definitionBlock?.accept(this, t);
    //n.outputBlock.accept(this, t);
  }

  visitDefinitionBlock(n: DefinitionBlock, t: OutputVisitorContext): void {
    // 1 -- AIDAN (maybe maxwell)
    // loop through body and call accept functions on each relevant element
    return undefined;
  }

  visitOutputBlock(n: OutputBlock, t: OutputVisitorContext): void {
    // 1 -- AIDAN (maybe maxwell)
    // loop through body and call accept functions on each relevant element
    return undefined;
  }

  visitVariableDeclaration(n: VariableDeclaration, t: OutputVisitorContext): void {
    // 2 -- AIDAN (maybe eric)
    // put into variable or constant maps (according to the n.isGlobalConstant class field)
    return undefined;
  }

  visitFunctionDeclaration(n: FunctionDeclaration, t: OutputVisitorContext): void {
    // 2 -- AIDAN (maybe eric)
    // put into functionTable
    return undefined;
  }

  visitLoopBlock(n: LoopBlock, t: OutputVisitorContext): void {
    // 3 -- MICHAEL
    // loop n.loopNumber times, for each body statement call accept
    return undefined;
  }

  visitFunctionCall(n: FunctionCall, t: OutputVisitorContext): OutputVisitorReturnType {
    const fnDec = this.functionTable.get(n.name.tokenValue);
    if (!fnDec) {
      throw Error(`Called an undeclared function ${n.name.tokenValue}`);
    }

    const argNames = fnDec.inputVariables;
    const argExprs = n.inputValues;
    const fnBody = fnDec.body;

    if (!argNames || !argExprs) {
      throw new Error(`IMPOSSIBLE - Something went wrong with parsing functions (calls)`);
    } else if (argNames.length !== argExprs.length) {
      throw new Error(
        `Number of arguments provided does not match number of arguments needed when calling ${n.name.tokenValue}`
      );
    }

    // Create a copy of the variable table for the new scope
    const newVariableTable = structuredClone(t.variableTable);

    for (let i = 0; i < argNames.length; i++) {
      newVariableTable.set(argNames[i].tokenValue, argExprs[i].accept(this, t));
    }

    for (const stmt of fnBody) {
      stmt.accept(this, {
        createStatementBuilder: t.createStatementBuilder,
        variableTable: newVariableTable
      });
    }

    // If we decide to return something from a function call in the future, return it here
    return undefined;
  }

  visitExpression(n: Expression, t: OutputVisitorContext): CreatePosition | number {
    // 3 -- MICHAEL
    // if no operator return leftvalue (evaluated)
    // else return leftValue (operator) rightValue.accept();
    // recursively evaluate the expression (assume proper inputs)
    // FIXME might not be needed
    return 0;
  }

  visitPosition(n: Position, t: OutputVisitorContext): CreatePosition | void {
    // TODO remove void // 4 -- MAXWELL
    // create the position
    return undefined;
  }

  visitOpExpression(n: OpExpression, t: OutputVisitorContext): OutputVisitorReturnType {
    // 3 -- MICHAEL
    // if no operator return leftvalue (evaluated)
    // else return leftValue (operator) rightValue.accept();
    // recursively evaluate the expression (assume proper inputs)
    throw new Error('Method not implemented.');
  }

  visitVariableAssignment(n: VariableAssignment, t: OutputVisitorContext): void {
    // 3 -- MICHAEL
    if (!this.constantTable.has(n.name.tokenValue)) {
      this.constantTable.set(n.name.tokenValue, n.value.accept(this, t));
    }

    t.variableTable.set(n.name.tokenValue, n.value.accept(this, t));
  }

  visitCoordinateAccess(n: CoordinateAccess, t: OutputVisitorContext): number {
    // 4 -- MAXWELL
    // variableNameHere.x
    // variableNameHere.y
    // ie accessing a coordinate from a variable
    return 0;
  }

  visitCreateMarker(n: CreateMarker, t: OutputVisitorContext): void {
    // TODO remove void // 5 -- KYLE
    // create the marker and return it
    return undefined;
  }

  visitCreatePolyline(n: CreatePolyline, t: OutputVisitorContext): void {
    // TODO remove void // 5 -- KYLE
    // create the street etc and return it
    return undefined;
  }

  visitTokenNode(n: TokenNode, t: OutputVisitorContext): void {
    // 5 -- KYLE
    // kyle
    return undefined;
  }

  visitAST(n: ASTNode, t: OutputVisitorContext): void {
    // dummy
    return undefined;
  }
}
