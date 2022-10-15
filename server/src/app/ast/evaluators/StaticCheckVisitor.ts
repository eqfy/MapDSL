import { Visitor } from "../Visitor";
import DefinitionBlock from "../DefinitionBlock";
import TokenNode from "../expressions/TokenNode";
import OutputBlock from "../OutputBlock";
import VariableAssignment from "../statements/VariableAssignment";
import CreatePolyline from "../statements/CreatePolyline";
import CoordinateAccess from "../expressions/CoordinateAccess";
import FunctionDeclaration from "../FunctionDeclaration";
import LoopBlock from "../statements/LoopBlock";
import ASTNode from "../ASTNode";
import VariableDeclaration from "../statements/VariableDeclaration";
import FunctionCall from "../expressions/FunctionCall";
import Program from "../Program";
import Position from "../expressions/Position";
import OpExpression from "../expressions/OpExpression";
import ErrorBuilder from "../Errors/ErrorBuilder";
import { CreatePosition} from "../../CreateStatements/CreateStatementTypes";
import CreateMarker from "../statements/CreateMarker";
import { isNumber, isString } from "../../util/typeChecking";

// This type represents all values allowed in our language
export type StaticCheckVisitorReturnType = CreatePosition | number | string | void;

interface StaticCheckVisitorContext {
  staticErrorBuilder: ErrorBuilder;
  variableTable: Map<string, StaticCheckVisitorReturnType>;
  functionTable: Map<string, FunctionDeclaration>; // always global
  constantTable: Map<string, StaticCheckVisitorReturnType>; // always global
}

export class StaticCheckVisitor implements Visitor<StaticCheckVisitorContext, StaticCheckVisitorReturnType> {
  visitProgram(n: Program, t: StaticCheckVisitorContext): void {
    n.definitionBlock?.accept(this, t);
    n.outputBlock.accept(this, t);
  }

  visitDefinitionBlock(n: DefinitionBlock, t: StaticCheckVisitorContext): void {
    for (const bodyElement of n.body) {
      bodyElement.accept(this, t);
    }
  }

  visitOutputBlock(n: OutputBlock, t: StaticCheckVisitorContext): void {
    for (const bodyElement of n.body) {
      bodyElement.accept(this, t);
    }
  }

  visitVariableDeclaration(n: VariableDeclaration, t: StaticCheckVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    n.isGlobalConstant
      ? t.constantTable.set(name, n.value.accept(this, t))
      : t.variableTable.set(name, n.value.accept(this, t));
  }

  visitFunctionDeclaration(n: FunctionDeclaration, t: StaticCheckVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    t.functionTable.set(name, n);
  }

  visitLoopBlock(n: LoopBlock, t: StaticCheckVisitorContext): void {
    const loopNumber = this.getNumberTokenValue(n.loopNumber, t);
    for (let i = 0; i < loopNumber; i++) {
      for (const statement of n.body) {
        statement.accept(this, t);
      }
    }
  }

  visitFunctionCall(n: FunctionCall, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
    const fnName = this.getStringTokenValue(n.name, t);
    const fnDec = t.functionTable.get(fnName);
    if (!fnDec) {
      t.staticErrorBuilder.buildError(`Called an undeclared function ${fnName}`, n.range);
      return;
    }

    const argNames = fnDec.inputVariables;
    const argExprs = n.inputValues;
    const fnBody = fnDec.body;

    if (!argNames || !argExprs) {
      t.staticErrorBuilder.buildError(`IMPOSSIBLE - Something went wrong with parsing functions (calls)`, n.range);
      return;
    }
    if (argNames.length !== argExprs.length) {
      t.staticErrorBuilder.buildError(`Number of arguments provided does not match number of arguments needed when calling ${fnName}`, n.range);
      return;
    }

    // Create a copy of the variable table for the new scope
    const newVariableTable = new Map(t.variableTable);

    for (let i = 0; i < argNames.length; i++) {
      const argName = this.getStringTokenValue(argNames[i], t);
      newVariableTable.set(argName, argExprs[i].accept(this, t));
    }

    for (const stmt of fnBody) {
      stmt.accept(this, {
        staticErrorBuilder: t.staticErrorBuilder,
        variableTable: newVariableTable,
        constantTable: t.constantTable,
        functionTable: t.functionTable
      });
    }
  }

  visitPosition(n: Position, t: StaticCheckVisitorContext): CreatePosition | void {
    // nothing to do here
  }

  visitOpExpression(n: OpExpression, t: StaticCheckVisitorContext): void {
    // nothing to do here
  }

  visitVariableAssignment(n: VariableAssignment, t: StaticCheckVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    if (!t.variableTable.has(name)) t.staticErrorBuilder.buildError(`Variable ${name} is undefined`, n.range);
  }

  visitCoordinateAccess(n: CoordinateAccess, t: StaticCheckVisitorContext): void {
    const name = this.getStringTokenValue(n.variableName, t);
    if (!t.constantTable.has(name) && !t.variableTable.has(name)) t.staticErrorBuilder.buildError(`Variable ${name} is undefined`, n.variableName.range);
  }

  visitCreateMarker(n: CreateMarker, t: StaticCheckVisitorContext): void {
    const type = this.getStringTokenValue(n.markerType, t);
    if (type !== "stop sign" && type !== "traffic light" && type !== "bus stop" && type !== "train stop") {
      t.staticErrorBuilder.buildError("Invalid marker type", n.range);
    }
  }

  visitCreatePolyline(n: CreatePolyline, t: StaticCheckVisitorContext): void {
    const type = this.getStringTokenValue(n.streetType, t);
    if (type !== "highway" && type !== "street" && type !== "bridge") {
      t.staticErrorBuilder.buildError("Invalid street type", n.range);
    }
  }

  visitTokenNode(n: TokenNode, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
    switch (n.targetValueType) {
      case "string":
        return n.tokenValue;
      case "number":
        return Number(n.tokenValue);
    }
    const name = n.tokenValue;
    if (t.constantTable.has(name)) {
      return t.constantTable.get(name);
    } else if (t.variableTable.has(name)) {
      return t.variableTable.get(name);
    } else {
      t.staticErrorBuilder.buildError("Variable does not exist", n.range);
      return 0;
    }
  }

  visitAST(n: ASTNode, t: StaticCheckVisitorContext): void {
    // nothing to do here
  }

  private getStringTokenValue(token: TokenNode, t: StaticCheckVisitorContext): string {
    const str = token.accept(this, t);
    if (!isString(str)) {
      t.staticErrorBuilder.buildError("Token is not a string", token.range);
      return "";
    }
    return str;
  }

  private getNumberTokenValue(token: TokenNode, t: StaticCheckVisitorContext): number {
    const num = token.accept(this, t);
    if (!isNumber(num)) {
      t.staticErrorBuilder.buildError("Token is not a number", token.range);
      return 0;
    }
    return Number(num);
  }
}