import { Visitor } from '../Visitor';
import DefinitionBlock from '../DefinitionBlock';
import TokenNode from '../expressions/TokenNode';
import OutputBlock from '../OutputBlock';
import VariableAssignment from '../statements/VariableAssignment';
import CreatePolyline from '../statements/CreatePolyline';
import CoordinateAccess from '../expressions/CoordinateAccess';
import FunctionDeclaration from '../FunctionDeclaration';
import LoopBlock from '../statements/LoopBlock';
import ASTNode from '../ASTNode';
import VariableDeclaration from '../statements/VariableDeclaration';
import FunctionCall from '../expressions/FunctionCall';
import Program from '../Program';
import Position from '../expressions/Position';
import OpExpression from '../expressions/OpExpression';
import {
  CreatePosition,
  isCreatePosition,
  MarkerCreateStatement,
  PolylineCreateStatement
} from '../../CreateStatements/CreateStatementTypes';
import CreateStatementBuilder from '../../CreateStatements/CreateStatementBuilder';
import CreateMarker from '../statements/CreateMarker';
import { isBoolean, isNumber, isString } from '../../util/typeChecking';
import ErrorBuilder from '../Errors/ErrorBuilder';
import IfElseBlock from '../statements/IfElseBlock';

// This type represents all values allowed in our language
export type OutputVisitorReturnType = CreatePosition | number | string | boolean | void;

interface OutputVisitorContext {
  dynamicErrorBuilder: ErrorBuilder;
  createStatementBuilder: CreateStatementBuilder;
  variableTable: Map<string, OutputVisitorReturnType>;
  functionTable: Map<string, FunctionDeclaration>; // always global
  constantTable: Map<string, OutputVisitorReturnType>; // always global
}

export class OutputVisitor implements Visitor<OutputVisitorContext, OutputVisitorReturnType> {
  visitProgram(n: Program, t: OutputVisitorContext): void {
    n.definitionBlock?.accept(this, t);
    n.outputBlock.accept(this, t);
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
        t.dynamicErrorBuilder.buildError('If/Else branch predicate should be a boolean', branch.expression.range);
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
    return undefined;
  }

  visitFunctionCall(n: FunctionCall, t: OutputVisitorContext): OutputVisitorReturnType {
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
        dynamicErrorBuilder: t.dynamicErrorBuilder,
        createStatementBuilder: t.createStatementBuilder,
        variableTable: newVariableTable,
        constantTable: t.constantTable,
        functionTable: t.functionTable
      });
    }
  }

  visitPosition(n: Position, t: OutputVisitorContext): CreatePosition | void {
    const xPos = n.xCoordinate.accept(this, t);
    const yPos = n.yCoordinate.accept(this, t);
    const pos = { x: xPos, y: yPos };
    if (isCreatePosition(pos)) {
      return pos;
    } else {
      t.dynamicErrorBuilder.buildError('Invalid position', {
        start: n.xCoordinate.range.start,
        end: n.yCoordinate.range.end
      });
    }
  }

  visitOpExpression(n: OpExpression, t: OutputVisitorContext): OutputVisitorReturnType {
    const leftValue = n.leftExpression.accept(this, t);
    const rightValue = n.rightExpression.accept(this, t);
    const operator = n.operator.accept(this, t);

    if (!isNumber(leftValue) && !isBoolean(leftValue)) {
      t.dynamicErrorBuilder.buildError('Expected a boolean or a number for left operand', n.leftExpression.range);
    }
    if (!isNumber(rightValue) && !isBoolean(rightValue)) {
      t.dynamicErrorBuilder.buildError('Expected a boolean or a number for right operand', n.rightExpression.range);
    }

    // Valid operations for both booleans and numbers
    if (n.operator.accept(this, t) === '==') {
      return leftValue === rightValue;
    } else if (n.operator.accept(this, t) === 'AND') {
      return leftValue && rightValue;
    } else if (n.operator.accept(this, t) === 'OR') {
      return leftValue || rightValue;
    }

    // Valid operations for only numbers
    if (isNumber(leftValue) && isNumber(rightValue)) {
      if (n.operator.accept(this, t) === '+') {
        return leftValue + rightValue;
      } else if (n.operator.accept(this, t) === '-') {
        return leftValue - rightValue;
      } else if (n.operator.accept(this, t) === '>') {
        return leftValue > rightValue;
      } else if (n.operator.accept(this, t) === '<') {
        return leftValue < rightValue;
      } else if (n.operator.accept(this, t) === '>=') {
        return leftValue >= rightValue;
      } else if (n.operator.accept(this, t) === '<=') {
        return leftValue <= rightValue;
      }
    } else {
      t.dynamicErrorBuilder.buildError('Invalid operator for boolean values', n.operator.range);
    }
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
      if (coordinate === 'x') {
        return position.x;
      } else if (coordinate === 'y') {
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
    if (type !== 'stop sign' && type !== 'traffic light' && type !== 'bus stop' && type !== 'train stop') return;

    const position = n.position.accept(this, t);
    if (!isCreatePosition(position)) {
      t.dynamicErrorBuilder.buildError('Invalid position', n.position.range);
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

    if (type !== 'highway' && type !== 'street' && type !== 'bridge') return;

    const startPosition = n.startPosition.accept(this, t);
    const endPosition = n.endPosition.accept(this, t);
    if (!isCreatePosition(startPosition) || !isCreatePosition(endPosition)) {
      t.dynamicErrorBuilder.buildError('Invalid positions', {
        start: n.startPosition.range.start,
        end: n.endPosition.range.end
      });
      return;
    }

    const polyline: PolylineCreateStatement = {
      type: type,
      startPosition: startPosition,
      endPosition: endPosition
    };
    t.createStatementBuilder.buildPolyline(polyline);
  }

  visitTokenNode(n: TokenNode, t: OutputVisitorContext): OutputVisitorReturnType {
    switch (n.targetValueType) {
      case 'string':
        return n.tokenValue;
      case 'number':
        return Number(n.tokenValue);
      case 'truthValue':
        return Boolean(n.tokenValue);
    }
    const name = n.tokenValue;
    if (t.constantTable.has(name)) {
      return t.constantTable.get(name);
    } else if (t.variableTable.has(name)) {
      return t.variableTable.get(name);
    }
  }

  visitAST(n: ASTNode, t: OutputVisitorContext): void {
    // nothing to do here
  }

  private getStringTokenValue(token: TokenNode, t: OutputVisitorContext): string {
    const str = token.accept(this, t);
    return !isString(str) ? '' : str;
  }

  private getNumberTokenValue(token: TokenNode, t: OutputVisitorContext): number {
    const num = token.accept(this, t);
    return !isNumber(num) ? 0 : Number(num);
  }
}
