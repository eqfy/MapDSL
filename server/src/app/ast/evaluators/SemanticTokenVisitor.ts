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
import { CreatePosition, isCreatePosition, PolylineCreateStatement } from "../../CreateStatements/CreateStatementTypes";
import CreateMarker from "../statements/CreateMarker";
import { isNumber, isString } from "../../util/typeChecking";
import { SemanticTokensBuilder } from "vscode-languageserver";
import { OutputVisitorReturnType } from "./OutputVisitor";


interface SemanticTokenVisitorContext {
  semanticTokenBuilder: SemanticTokensBuilder;
  variableTable: Map<string, OutputVisitorReturnType>;
  functionTable: Map<string, FunctionDeclaration>; // always global
  constantTable: Map<string, OutputVisitorReturnType>; // always global
}

export class SemanticTokenVisitor implements Visitor<SemanticTokenVisitorContext, void> {
  visitProgram(n: Program, t: SemanticTokenVisitorContext): void {
    n.definitionBlock?.accept(this, t);
    n.outputBlock.accept(this, t);
  }

  visitDefinitionBlock(n: DefinitionBlock, t: SemanticTokenVisitorContext): void {
    for (const bodyElement of n.body) {
      bodyElement.accept(this, t);
    }
  }

  visitOutputBlock(n: OutputBlock, t: SemanticTokenVisitorContext): void {
    for (const bodyElement of n.body) {
      bodyElement.accept(this, t);
    }
  }

  visitVariableDeclaration(n: VariableDeclaration, t: SemanticTokenVisitorContext): void {
    n.name.accept(this, t);
    n.value.accept(this, t);
  }

  visitFunctionDeclaration(n: FunctionDeclaration, t: SemanticTokenVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    t.functionTable.set(name, n);
  }

  visitLoopBlock(n: LoopBlock, t: SemanticTokenVisitorContext): void {
    const loopNumber = this.getNumberTokenValue(n.loopNumber, t);
    for (let i = 0; i < loopNumber; i++) {
      for (const statement of n.body) {
        statement.accept(this, t);
      }
    }
  }

  visitFunctionCall(n: FunctionCall, t: SemanticTokenVisitorContext): OutputVisitorReturnType {
    const fnName = this.getStringTokenValue(n.name, t);
    const fnDec = t.functionTable.get(fnName);
    if (!fnDec) return;
    const argNames = fnDec.inputVariables;
    const argExprs = n.inputValues;
    const fnBody = fnDec.body;

    if (!argNames || !argExprs) return;
    if (argNames.length !== argExprs.length) return;

    // Create a copy of the variable table for the new scope
    const newVariableTable = new Map(t.variableTable);

    for (let i = 0; i < argNames.length; i++) {
      const argName = this.getStringTokenValue(argNames[i], t);
      newVariableTable.set(argName, argExprs[i].accept(this, t));
    }

    for (const stmt of fnBody) {
      stmt.accept(this, {
        semanticTokenBuilder: t.semanticTokenBuilder,
        variableTable: newVariableTable,
        constantTable: t.constantTable,
        functionTable: t.functionTable
      });
    }
  }

  visitPosition(n: Position, t: SemanticTokenVisitorContext): CreatePosition | void {
    const xPos = n.xCoordinate.accept(this, t);
    const yPos = n.yCoordinate.accept(this, t);
    const pos = { x: xPos, y: yPos };
    if (isCreatePosition(pos)) {
      return pos;
    } else {
      return;
    }
  }

  visitOpExpression(n: OpExpression, t: SemanticTokenVisitorContext): OutputVisitorReturnType {
    const leftValue = n.leftExpression.accept(this, t);
    if (!isNumber(leftValue)) return;

    let returnValue = leftValue;
    const rightValue = n.rightExpression.accept(this, t);
    if (!isNumber(rightValue)) return;

    if (n.operator.accept(this, t) === "+") {
      returnValue += rightValue;
    } else if (n.operator.accept(this, t) === "-") {
      returnValue -= rightValue;
    } else {
      return;
    }
    return returnValue;
  }

  visitVariableAssignment(n: VariableAssignment, t: SemanticTokenVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    if (t.variableTable.has(name)) {
      t.variableTable.set(name, n.value.accept(this, t));
    }
  }

  visitCoordinateAccess(n: CoordinateAccess, t: SemanticTokenVisitorContext): number {
    let position;
    const name = this.getStringTokenValue(n.variableName, t);
    if (t.constantTable.has(name)) {
      position = t.constantTable.get(n.variableName.tokenValue);
    } else if (t.variableTable.has(name)) {
      position = t.variableTable.get(n.variableName.tokenValue);
    }

    if (isCreatePosition(position)) {
      const coordinate = this.getStringTokenValue(n.coordinate, t);
      if (coordinate === "x") {
        return position.x;
      } else if (coordinate === "y") {
        return position.y;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  visitCreateMarker(n: CreateMarker, t: SemanticTokenVisitorContext): void {
    n.markerType.accept(this, t);
    n.position.accept(this, t);
  }

  visitCreatePolyline(n: CreatePolyline, t: SemanticTokenVisitorContext): void {
		n.streetType.accept(this, t);
		n.startPosition.accept(this, t);
		n.endPosition.accept(this, t);
  }

  visitTokenNode(n: TokenNode, t: SemanticTokenVisitorContext): OutputVisitorReturnType {
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
      return 0;
    }
  }

  visitAST(n: ASTNode, t: SemanticTokenVisitorContext): void {
    console.log("visitAST was called");
  }

  private getStringTokenValue(token: TokenNode, t: SemanticTokenVisitorContext): string {
    const str = token.accept(this, t);
    if (!isString(str)) return "";
    return str;
  }

  private getNumberTokenValue(token: TokenNode, t: SemanticTokenVisitorContext): number {
    const num = token.accept(this, t);
    if (!isNumber(num)) return 0;
    return Number(num);
  }
}
