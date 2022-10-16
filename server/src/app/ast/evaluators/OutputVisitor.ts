import { Visitor } from "../Visitor";
import DefinitionBlock from "../DefinitionBlock";
import TokenNode from "../expressions/TokenNode";
import OutputBlock from "../OutputBlock";
import VariableAssignment from "../statements/VariableAssignment";
import CreatePolyline from "../statements/CreatePolyline";
import CreatePolygon from '../statements/CreatePolygon';
import CoordinateAccess from "../expressions/CoordinateAccess";
import FunctionDeclaration from "../FunctionDeclaration";
import LoopBlock from "../statements/LoopBlock";
import ASTNode from "../ASTNode";
import VariableDeclaration from "../statements/VariableDeclaration";
import FunctionCall from "../expressions/FunctionCall";
import Program from "../Program";
import Position from "../expressions/Position";
import OpExpression from "../expressions/OpExpression";
import { CreatePosition, isCreatePosition, MarkerCreateStatement, PolygonCreateStatement, PolylineCreateStatement } from "../../CreateStatements/CreateStatementTypes";
import CreateStatementBuilder from "../../CreateStatements/CreateStatementBuilder";
import CreateMarker from "../statements/CreateMarker";
import { isBoolean, isNumber, isString } from "../../util/typeChecking";
import ErrorBuilder from "../Errors/ErrorBuilder";
import IfElseBlock from "../statements/IfElseBlock";
import { booleanOpEvaluator, EvaluatedExpression, EvaluatedOperator, numOpEvaluator } from "./OpExprHelper";
import Expression from '../expressions/Expression';
import { DEFAULT_CANVAS_HEIGHT, DEFAULT_CANVAS_WIDTH, MAX_CANVAS_SIZE } from '../../util/constants';
import { Range } from '../../util/Range';
import CanvasConfiguration from "../CanvasConfiguration";

// This type represents all values allowed in our language
export type OutputVisitorReturnType = CreatePosition | number | string | boolean | void;

interface OutputVisitorContext {
  dynamicErrorBuilder: ErrorBuilder;
  createStatementBuilder: CreateStatementBuilder;
  variableTable: Map<string, OutputVisitorReturnType>;
  functionTable: Map<string, FunctionDeclaration>; // always global
  constantTable: Map<string, OutputVisitorReturnType>; // always global
  canvas: { width: number, height: number }; // canvas dimension
}

export class OutputVisitor implements Visitor<OutputVisitorContext, OutputVisitorReturnType> {
  visitProgram(n: Program, t: OutputVisitorContext): void {
    n.canvasConfiguration?.accept(this, t);
    n.definitionBlock?.accept(this, t);
    n.outputBlock.accept(this, t);
  }

  visitCanvasConfiguration(n: CanvasConfiguration, t: OutputVisitorContext): OutputVisitorReturnType {
    // set default canvas size if unspecified / invalid
    if (!n.width || !n.height) {
      t.canvas.width = DEFAULT_CANVAS_WIDTH;
      t.canvas.height = DEFAULT_CANVAS_HEIGHT;
    } else {
      const width = this.getNumberTokenValue(n.width, t);
      const height = this.getNumberTokenValue(n.height, t);
      if (width > MAX_CANVAS_SIZE || width <= 0 || height > MAX_CANVAS_SIZE || height <= 0) {
        t.canvas.width = DEFAULT_CANVAS_WIDTH;
        t.canvas.height = DEFAULT_CANVAS_HEIGHT;
      } else {
        t.canvas.width = width;
        t.canvas.height = height;
      }
    }
  }

  visitDefinitionBlock(n: DefinitionBlock, t: OutputVisitorContext): void {
    for (const bodyElement of n.body) {
      bodyElement.accept(this, t);
    }
  }

  visitOutputBlock(n: OutputBlock, t: OutputVisitorContext): void {
    for (const bodyElement of n.body) {
      bodyElement.accept(this, t);
    }
  }

  visitVariableDeclaration(n: VariableDeclaration, t: OutputVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    n.isGlobalConstant
      ? t.constantTable.set(name, n.value.accept(this, t))
      : t.variableTable.set(name, n.value.accept(this, t));
  }

  visitFunctionDeclaration(n: FunctionDeclaration, t: OutputVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    t.functionTable.set(name, n);
  }

  visitLoopBlock(n: LoopBlock, t: OutputVisitorContext): void {
    const loopNumber = this.getNumberTokenValue(n.loopNumber, t);
    for (let i = 0; i < loopNumber; i++) {
      for (const statement of n.body) {
        statement.accept(this, t);
      }
    }
  }

  visitIfElseBlock(n: IfElseBlock, t: OutputVisitorContext): OutputVisitorReturnType {
    for (const branch of n.branchTable) {
      const branchTruthiness = branch.expression.accept(this, t);
      if (!isBoolean(branchTruthiness)) {
        t.dynamicErrorBuilder.buildError("If/Else branch predicate should be a boolean", branch.expression.range);
      }
      if (branchTruthiness) {
        for (const statement of branch.statements) {
          statement.accept(this, t);
        }
        return;
      }
    }
    for (const statement of n.elseBranch) {
      statement.accept(this, t);
    }
  }

  visitFunctionCall(n: FunctionCall, t: OutputVisitorContext): OutputVisitorReturnType {
    const fnName = this.getStringTokenValue(n.name, t);

    t.dynamicErrorBuilder.stackFrame.push(fnName);
    if (t.dynamicErrorBuilder.stackFrame.length > 99) {
      t.dynamicErrorBuilder.buildError("Function call stack exceeded 99, you may have an infinite recursion", n.range);
      return;
    }

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

    const newCtx = {
      dynamicErrorBuilder: t.dynamicErrorBuilder,
      createStatementBuilder: t.createStatementBuilder,
      variableTable: newVariableTable,
      constantTable: t.constantTable,
      functionTable: t.functionTable,
      canvas: t.canvas
    };
    for (const stmt of fnBody) {
      stmt.accept(this, newCtx);
      if (t.dynamicErrorBuilder.errors.length > 0) return;
    }

    t.dynamicErrorBuilder.stackFrame.pop();
  }

  visitPosition(n: Position, t: OutputVisitorContext): CreatePosition | void {
    const xPos = n.xCoordinate.accept(this, t);
    const yPos = n.yCoordinate.accept(this, t);
    const pos = { x: xPos, y: yPos };
    if (isCreatePosition(pos)) {
      return pos;
    } else {
      t.dynamicErrorBuilder.buildError("Invalid position", {
        start: n.xCoordinate.range.start,
        end: n.yCoordinate.range.end
      });
    }
  }

  visitOpExpression(n: OpExpression, t: OutputVisitorContext): number | boolean | undefined {
    // Evaluate all subexpressions first
    // Subexpressions are either a token or another OpExpression corresponding to a parenthesized expression
    const evaluatedValues: EvaluatedExpression[] = [];
    for (const expression of n.expressions) {
      const val = expression.accept(this, t);
      if (val === undefined) t.dynamicErrorBuilder.buildError("Expected a boolean or a number for operands, but got something else (could be undefined)", expression.range);
      if (isNumber(val) || isBoolean(val)) {
        evaluatedValues.push({ val, range: expression.range });
      } else {
        t.dynamicErrorBuilder.buildError("Expected a boolean or a number for operands", expression.range);
      }
    }
    const evaluatedOperators: EvaluatedOperator[] = [];
    for (const operator of n.operators) {
      const val = operator.accept(this, t);
      if (val === undefined) t.dynamicErrorBuilder.buildError("Expected an operator, but found something else", operator.range);
      if (isString(val)) {
        evaluatedOperators.push({ val, range: operator.range });
      } else {
        // Impossible, parser enforces operator to be a string
        t.dynamicErrorBuilder.buildError("Expected a string for operator", operator.range);
      }
    }

    // These log statements are for verifying if the order of operations are correct.
    // console.log("expr eval 1", evaluatedValues, evaluatedOperators);

    // Evaluate in order of operator precedence
    // '*' '/' then  '+' '-'  then  '==' 'AND' 'OR' '>' '<' '>=' '<='
    let i = 0;
    while (i < evaluatedOperators.length) {
      const operator = evaluatedOperators[i];
      if (["*", "/"].includes(operator.val)) {
        const leftValue = evaluatedValues[i];
        const rightValue = evaluatedValues[i + 1];
        const finalVal = numOpEvaluator(operator, leftValue, rightValue, t.dynamicErrorBuilder);
        if (finalVal === undefined) return;
        evaluatedValues[i] = finalVal;
        evaluatedValues.splice(i + 1, 1);
        evaluatedOperators.splice(i, 1);
      } else {
        i += 1;
      }
    }
    // console.log("expr eval 2", evaluatedValues, evaluatedOperators);

    i = 0;
    while (i < evaluatedOperators.length) {
      const operator = evaluatedOperators[i];
      if (["+", "-"].includes(operator.val)) {
        const leftValue = evaluatedValues[i];
        const rightValue = evaluatedValues[i + 1];
        const finalVal = numOpEvaluator(operator, leftValue, rightValue, t.dynamicErrorBuilder);
        if (finalVal === undefined) return;
        evaluatedValues[i] = finalVal;
        evaluatedValues.splice(i + 1, 1);
        evaluatedOperators.splice(i, 1);
      } else {
        i += 1;
      }
    }
    // console.log("expr eval 3", evaluatedValues, evaluatedOperators);

    // handles '==' 'AND' 'OR' '>' '<' '>=' '<=' for numbers
    i = 0;
    while (i < evaluatedOperators.length) {
      const operator = evaluatedOperators[i];
      const leftValue = evaluatedValues[i];
      const rightValue = evaluatedValues[i + 1];
      if (isNumber(leftValue.val) && isNumber(rightValue.val)) {
        const finalVal = numOpEvaluator(operator, leftValue, rightValue, t.dynamicErrorBuilder);
        if (finalVal === undefined) return;
        evaluatedValues[i] = finalVal;
        evaluatedValues.splice(i + 1, 1);
        evaluatedOperators.splice(i, 1);
      } else {
        i += 1;
      }
    }
    // console.log("expr eval 4", evaluatedValues, evaluatedOperators);

    // handles '==' 'AND' 'OR' for booleans
    i = 0;
    while (i < evaluatedOperators.length) {
      const operator = evaluatedOperators[i];
      const leftValue = evaluatedValues[i];
      const rightValue = evaluatedValues[i + 1];
      const finalVal = booleanOpEvaluator(operator, leftValue, rightValue, t.dynamicErrorBuilder);
      if (finalVal === undefined) return;
      evaluatedValues[i] = finalVal;
      evaluatedValues.splice(i + 1, 1);
      evaluatedOperators.splice(i, 1);
      i += 1;
    }
    // console.log("expr eval 5", evaluatedValues, evaluatedOperators);

    if (evaluatedOperators.length > 0) {
      t.dynamicErrorBuilder.buildError("Expression cannot be fully reduced", n.range);
    }
    return evaluatedValues[0].val;
  }

  visitVariableAssignment(n: VariableAssignment, t: OutputVisitorContext): void {
    const name = this.getStringTokenValue(n.name, t);
    if (t.variableTable.has(name)) {
      t.variableTable.set(name, n.value.accept(this, t));
    }
  }

  visitCoordinateAccess(n: CoordinateAccess, t: OutputVisitorContext): number {
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
        t.dynamicErrorBuilder.buildError(`Coordinate was not x or y`, n.coordinate.range);
        return 0;
      }
    } else {
      t.dynamicErrorBuilder.buildError(`Invalid coordinate access`, n.coordinate.range);
      return 0;
    }
  }

  visitCreateMarker(n: CreateMarker, t: OutputVisitorContext): void {
    const type = this.getStringTokenValue(n.markerType, t);
    if (type !== "stop sign" && type !== "traffic light" && type !== "bus stop" && type !== "train stop") return;

    const position = n.position.accept(this, t);
    if (!isCreatePosition(position)) {
      t.dynamicErrorBuilder.buildError("Invalid position", n.position.range);
      return;
    } else if (!this.checkPositionInCanvas(position, t, n.position.range)) {
      return;
    }

    const marker: MarkerCreateStatement = {
      type: type,
      position: position
    };
    t.createStatementBuilder.buildMarker(marker);
  }

  visitCreatePolyline(n: CreatePolyline, t: OutputVisitorContext): void {
    const type = this.getStringTokenValue(n.streetType, t);

    if (type !== "highway" && type !== "street" && type !== "bridge") return;

    const startPosition = n.startPosition.accept(this, t);
    const endPosition = n.endPosition.accept(this, t);
    if (!isCreatePosition(startPosition) || !isCreatePosition(endPosition)) {
      t.dynamicErrorBuilder.buildError("Invalid positions", {
        start: n.startPosition.range.start,
        end: n.endPosition.range.end
      });
      return;
    } else {
      // check both positions even if the first one is invalid
      let valid = this.checkPositionInCanvas(startPosition, t, n.startPosition.range);
      valid = this.checkPositionInCanvas(endPosition, t, n.endPosition.range) && valid;
      if (!valid) {
        return;
      }
    }

    const polyline: PolylineCreateStatement = {
      type: type,
      startPosition: startPosition,
      endPosition: endPosition
    };
    t.createStatementBuilder.buildPolyline(polyline);
  }

  visitCreatePolygon(n: CreatePolygon, t: OutputVisitorContext): void {
    const type = this.getStringTokenValue(n.polygonType, t);

    if (type !== 'water' && type !== 'building') return;

    const positions: CreatePosition[] = [];

    for (const expr of n.positions) {
      const position = expr.accept(this, t);
      if (!isCreatePosition(position)) {
        t.dynamicErrorBuilder.buildError("Invalid positions", {
          start: n.positions[0].range.start, end: n.positions[n.positions.length - 1].range.end
        });
        return;
      }
      positions.push(position);
    }

    let valid = false;
    for (let i = 0; i < positions.length; i ++) {
      this.checkPositionInCanvas(positions[i], t, n.positions[i].range);
      valid = true;
    }

    if (!valid) {
      return;
    }

    if (positions.length < 4) {
      t.dynamicErrorBuilder.buildError("Impossible - CREATE polygon has fewer than 4 positions (enforced by Parser", {
        start: n.positions[0].range.start, end: n.positions[n.positions.length - 1].range.end
      });
      return;
    }

    const polygon: PolygonCreateStatement = {
      type: type,
      positions: [positions[0], positions[1], positions[2], positions[3]]
    };
    t.createStatementBuilder.buildPolygon(polygon);
  }

  visitTokenNode(n: TokenNode, t: OutputVisitorContext): OutputVisitorReturnType {
    switch (n.targetValueType) {
      case "string":
        return n.tokenValue;
      case "number":
        return Number(n.tokenValue);
      case "truthValue":
        return n.tokenValue === "true";
    }
    const name = n.tokenValue;
    if (t.constantTable.has(name)) {
      return t.constantTable.get(name);
    } else if (t.variableTable.has(name)) {
      return t.variableTable.get(name);
    } else {
      t.dynamicErrorBuilder.buildError(`Variable ${name} is undefined`, n.range);
      return 0;
    }
  }

  visitAST(n: ASTNode, t: OutputVisitorContext): void {
    // nothing to do here
  }

  private getStringTokenValue(token: TokenNode, t: OutputVisitorContext): string {
    const str = token.accept(this, t);
    return !isString(str) ? "" : str;
  }

  private getNumberTokenValue(token: TokenNode, t: OutputVisitorContext): number {
    const num = token.accept(this, t);
    return !isNumber(num) ? 0 : Number(num);
  }

  // check if a position is in canvas, return true if so, report dynamic error and return false otherwise
  private checkPositionInCanvas(pos: CreatePosition, t: OutputVisitorContext, range: Range): boolean {
    if (!pos) return false;
    if (pos.x < 0 || pos.x > t.canvas.width || pos.y < 0 || pos.y > t.canvas.height) {
      t.dynamicErrorBuilder.buildError(`Position (${pos.x}, ${pos.y}) outside of canvas which is ${t.canvas.width} by ${t.canvas.height}`, range);
      return false;
    }
    return true;
  }
}
