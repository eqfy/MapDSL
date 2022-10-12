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
	PolylineCreateStatement,
} from '../../CreateStatements/CreateStatementTypes';
import CreateStatementBuilder from '../../CreateStatements/CreateStatementBuilder';
import CreateMarker from '../statements/CreateMarker';
import { isNumber, isString } from '../../util/typeChecking';
import ErrorBuilder from '../Errors/ErrorBuilder';

// This type represents all values allowed in our language
export type OutputVisitorReturnType = CreatePosition | number | string | void;

interface OutputVisitorContext {
	errorBuilder: ErrorBuilder;
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

	visitFunctionCall(n: FunctionCall, t: OutputVisitorContext): OutputVisitorReturnType {
		const fnName = this.getStringTokenValue(n.name, t);
		const fnDec = t.functionTable.get(fnName);
		if (!fnDec) {
			t.errorBuilder.buildStaticError(`Called an undeclared function ${fnName}`, n.name.range);
			return;
		}

		const argNames = fnDec.inputVariables;
		const argExprs = n.inputValues;
		const fnBody = fnDec.body;

		if (!argNames || !argExprs) {
			t.errorBuilder.buildStaticError(`IMPOSSIBLE - Something went wrong with parsing functions (calls)`, n.name.range);
			return;
		}
		if (argNames.length !== argExprs.length) {
			t.errorBuilder.buildStaticError(`Number of arguments provided does not match number of arguments needed when calling ${fnName}`, n.name.range);
		}

		// Create a copy of the variable table for the new scope
		const newVariableTable = new Map(t.variableTable);

		for (let i = 0; i < argNames.length; i++) {
			const argName = this.getStringTokenValue(argNames[i], t);
			newVariableTable.set(argName, argExprs[i].accept(this, t));
		}

		for (const stmt of fnBody) {
			stmt.accept(this, {
				errorBuilder: t.errorBuilder,
				createStatementBuilder: t.createStatementBuilder,
				variableTable: newVariableTable,
				constantTable: t.constantTable,
				functionTable: t.functionTable,
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
			t.errorBuilder.buildStaticError('Invalid position',{zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
		}
	}

	visitOpExpression(n: OpExpression, t: OutputVisitorContext): OutputVisitorReturnType {
		const leftValue = n.leftExpression.accept(this, t);
		if (!isNumber(leftValue)) {
			t.errorBuilder.buildStaticError('Expected a number for left operand',{zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
			return;
		}

		let returnValue = leftValue;
		const rightValue = n.rightExpression.accept(this, t);
		if (!isNumber(rightValue)) {
			t.errorBuilder.buildStaticError('Expected a number for left operand',{zeroIndexStart: 0, zeroIndexEnd: 0}); // TODO
			return;
		}

		if (n.operator.accept(this, t) === '+') {
			returnValue += rightValue;
		} else if (n.operator.accept(this, t) === '-') {
			returnValue -= rightValue;
		} else {
			t.errorBuilder.buildStaticError('Invalid operator',{zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
			return;
		}
		return returnValue;
	}

	visitVariableAssignment(n: VariableAssignment, t: OutputVisitorContext): void {
		const name = this.getStringTokenValue(n.name, t);
		if (t.variableTable.has(name)) {
			t.variableTable.set(name, n.value.accept(this, t));
		} else {
			t.errorBuilder.buildStaticError(`Variable ${name} is undefined`, n.name.range);
		}
	}

	visitCoordinateAccess(n: CoordinateAccess, t: OutputVisitorContext): number {
		let position;
		const name = this.getStringTokenValue(n.variableName, t);
		if (t.constantTable.has(name)) {
			position = t.constantTable.get(n.variableName.tokenValue);
		} else if (t.variableTable.has(name)) {
			position = t.variableTable.get(n.variableName.tokenValue);
		} else {
			t.errorBuilder.buildStaticError(`Variable ${name} is undefined`, n.variableName.range);
		}

		if (isCreatePosition(position)) {
			const coordinate = this.getStringTokenValue(n.coordinate, t);
			if (coordinate === 'x') {
				return position.x;
			} else if (coordinate === 'y') {
				return position.y;
			} else {
				t.errorBuilder.buildStaticError(`Coordinate was not x or y`, n.coordinate.range);
				return 0;
			}
		} else {
			t.errorBuilder.buildStaticError(`Invalid coordiante access`, n.coordinate.range);
			return 0;
		}
	}

	visitCreateMarker(n: CreateMarker, t: OutputVisitorContext): void {
		const type = this.getStringTokenValue(n.markerType, t);
		if (type !== 'stop sign' && type !== 'traffic light' && type !== 'bus stop' && type !== 'train stop'){
			t.errorBuilder.buildStaticError('Invalid marker type', n.markerType.range);
			return;
		}

		const position = n.position.accept(this, t);
		if (!isCreatePosition(position)) {
			t.errorBuilder.buildStaticError('Invalid position',{zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
			return;
		}

		const marker: MarkerCreateStatement = {
			type: type,
			position: position,
		};
		t.createStatementBuilder.buildMarker(marker);
	}

	visitCreatePolyline(n: CreatePolyline, t: OutputVisitorContext): void {
		const type = this.getStringTokenValue(n.streetType, t);

		if (type !== 'highway' && type !== 'street' && type !== 'bridge') {
			t.errorBuilder.buildStaticError('Invalid street type', n.streetType.range);
			return;
		}

		const startPosition = n.startPosition.accept(this, t);
		const endPosition = n.endPosition.accept(this, t);
		if (!isCreatePosition(startPosition) || !isCreatePosition(endPosition)){
			t.errorBuilder.buildStaticError('Invalid positions',{zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
			return;
		}

		const polyline: PolylineCreateStatement = {
			type: type,
			startPosition: startPosition,
			endPosition: endPosition,
		};
		t.createStatementBuilder.buildPolyline(polyline);
	}

	visitTokenNode(n: TokenNode, t: OutputVisitorContext): OutputVisitorReturnType {
		switch (n.targetValueType) {
			case 'string':
				return n.tokenValue;
			case 'number':
				return Number(n.tokenValue);
		}
		const name = n.tokenValue;
		if (t.constantTable.has(name)) {
			return t.constantTable.get(name);
		} else if (t.variableTable.has(name)) {
			return t.variableTable.get(name);
		} else {
			t.errorBuilder.buildStaticError('Variable does not exist',n.range);// TODO
			return 0;
		}
	}

	private getStringTokenValue(token: TokenNode, t: OutputVisitorContext): string {
		const str = token.accept(this, t);
		if (!isString(str)){
			t.errorBuilder.buildStaticError('Token is not a string',token.range);// TODO
			return "";
		}
		return str;
	}

	private getNumberTokenValue(token: TokenNode, t: OutputVisitorContext): number {
		const num = token.accept(this, t);
		if (!isNumber(num)) {
			t.errorBuilder.buildStaticError('Token is not a number',token.range);// TODO
			return 0;
		}
		return Number(num);
	}

	visitAST(n: ASTNode, t: OutputVisitorContext): void {
		console.log('visitAST was called');
	}
}
