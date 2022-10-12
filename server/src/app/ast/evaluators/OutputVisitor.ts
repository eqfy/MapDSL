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

// This type represents all values allowed in our language
export type OutputVisitorReturnType = CreatePosition | number | string | void;

interface OutputVisitorContext {
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
		// n.value can be a token, which could be a variable, or it could be a number, or a string
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
		if (!fnDec) throw Error(`Called an undeclared function ${fnName}`);

		const argNames = fnDec.inputVariables;
		const argExprs = n.inputValues;
		const fnBody = fnDec.body;

		if (!argNames || !argExprs) throw new Error(`IMPOSSIBLE - Something went wrong with parsing functions (calls)`);
		if (argNames.length !== argExprs.length)
			throw new Error(`Number of arguments provided does not match number of arguments needed when calling ${fnName}`);

		// Create a copy of the variable table for the new scope
		const newVariableTable = new Map(t.variableTable);

		for (let i = 0; i < argNames.length; i++) {
			const argName = this.getStringTokenValue(argNames[i], t);
			newVariableTable.set(argName, argExprs[i].accept(this, t));
		}

		for (const stmt of fnBody) {
			stmt.accept(this, {
				createStatementBuilder: t.createStatementBuilder,
				variableTable: newVariableTable,
				constantTable: t.constantTable,
				functionTable: t.functionTable,
			});
		}
	}

	visitExpression(n: Expression, t: OutputVisitorContext): void {
		console.log('visitExpression was called!!??');
	}

	visitPosition(n: Position, t: OutputVisitorContext): CreatePosition | void {
		const xPos = n.xCoordinate.accept(this, t);
		const yPos = n.yCoordinate.accept(this, t);
		const pos = { x: xPos, y: yPos };
		if (isCreatePosition(pos)) {
			return pos;
		} else {
			throw new Error('Invalid position');
		}
	}

	visitOpExpression(n: OpExpression, t: OutputVisitorContext): OutputVisitorReturnType {
		const leftValue = n.leftExpression.accept(this, t);
		if (!isNumber(leftValue)) throw new Error('Expected a number for left operand');

		let returnValue = leftValue;
		const rightValue = n.rightExpression.accept(this, t);
		if (!isNumber(rightValue)) throw new Error('Expected a number for right operand');

		if (n.operator.accept(this, t) === '+') {
			returnValue += rightValue;
		} else if (n.operator.accept(this, t) === '-') {
			returnValue -= rightValue;
		} else {
			throw new Error('Invalid operator');
		}
		return returnValue;
	}

	visitVariableAssignment(n: VariableAssignment, t: OutputVisitorContext): void {
		const name = this.getStringTokenValue(n.name, t);
		if (t.variableTable.has(name)) {
			t.variableTable.set(name, n.value.accept(this, t));
		} else {
			throw new Error('Variable does not exist');
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
			throw new Error('Variable does not exist');
		}

		if (isCreatePosition(position)) {
			const coordinate = this.getStringTokenValue(n.coordinate, t);
			if (coordinate === 'x') {
				return position.x;
			} else if (coordinate === 'y') {
				return position.y;
			} else {
				throw new Error('coordinate access was not x or y');
			}
		} else {
			throw new Error('invalid coordinate access');
		}
	}

	visitCreateMarker(n: CreateMarker, t: OutputVisitorContext): void {
		const type = this.getStringTokenValue(n.markerType, t);
		if (type !== 'stop sign' && type !== 'traffic light' && type !== 'bus stop' && type !== 'train stop')
			throw new Error('Invalid marker type');

		const position = n.position.accept(this, t);
		if (!isCreatePosition(position)) throw new Error('Invalid position');

		const marker: MarkerCreateStatement = {
			type: type,
			position: position,
		};
		t.createStatementBuilder.buildMarker(marker);
	}

	visitCreatePolyline(n: CreatePolyline, t: OutputVisitorContext): void {
		const type = this.getStringTokenValue(n.streetType, t);

		if (type !== 'highway' && type !== 'street' && type !== 'bridge') throw new Error('Invalid street type');

		const startPosition = n.startPosition.accept(this, t);
		const endPosition = n.endPosition.accept(this, t);
		if (!isCreatePosition(startPosition) || !isCreatePosition(endPosition))
			throw new Error('Invalid startPosition or endPosition');

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
			throw new Error('Variable does not exist');
		}
		return undefined;
	}

	visitAST(n: ASTNode, t: OutputVisitorContext): void {
		console.log('visitAST was called!!??');
	}

	private getStringTokenValue(token: TokenNode, t: OutputVisitorContext): string {
		const str = token.accept(this, t);
		if (!isString(str)) throw new Error('Token is not a string');
		return str;
	}

	private getNumberTokenValue(token: TokenNode, t: OutputVisitorContext): number {
		const num = token.accept(this, t);
		if (!isNumber(num)) throw new Error('Token is not a number');
		return Number(num);
	}

	private capitalizeFirstLetter(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
