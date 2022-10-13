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
import ErrorBuilder from '../Errors/ErrorBuilder'
import {
	CreatePosition,
	isCreatePosition,
	MarkerCreateStatement,
	PolylineCreateStatement,
} from '../../CreateStatements/CreateStatementTypes';
import CreateMarker from '../statements/CreateMarker';
import { isNumber, isString } from '../../util/typeChecking';

// This type represents all values allowed in our language
export type StaticCheckVisitorReturnType = CreatePosition | number | string | void;

interface StaticCheckVisitorContext {
	errorBuilder: ErrorBuilder;
	variableTable: Map<string, StaticCheckVisitorReturnType>;
	functionTable: Map<string, FunctionDeclaration>; // always global
	constantTable: Map<string, StaticCheckVisitorReturnType>; // always global
}

export class StaticCheckVisitor implements Visitor<StaticCheckVisitorContext, StaticCheckVisitorReturnType> {
	visitProgram(n: Program, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		n.definitionBlock?.accept(this, t);
		n.outputBlock.accept(this, t);
	}

	visitDefinitionBlock(n: DefinitionBlock, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		for (const bodyElement of n.body) {
			bodyElement.accept(this, t);
		}
	}

	visitOutputBlock(n: OutputBlock, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		for (const bodyElement of n.body) {
			bodyElement.accept(this, t);
		}
	}

	visitVariableDeclaration(n: VariableDeclaration, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		const name = this.getStringTokenValue(n.name, t);
		n.isGlobalConstant
			? t.constantTable.set(name, n.value.accept(this, t))
			: t.variableTable.set(name, n.value.accept(this, t));
	}

	visitFunctionDeclaration(n: FunctionDeclaration, t: StaticCheckVisitorContext): void {
		const name = this.getStringTokenValue(n.name, t);// TODO update (if needed) to do some static checks
		t.functionTable.set(name, n);
	}

	visitLoopBlock(n: LoopBlock, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		this.getNumberTokenValue(n.loopNumber, t);
		for (const statement of n.body) {
			statement.accept(this, t);
		}
	}

	visitFunctionCall(n: FunctionCall, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
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

		const newVariableTable = new Map(t.variableTable);
		for (let i = 0; i < argNames.length; i++) {
			const argName = this.getStringTokenValue(argNames[i], t);
			newVariableTable.set(argName, argExprs[i].accept(this, t))
		}

		for (const stmt of fnBody) {
			stmt.accept(this, {
				errorBuilder: t.errorBuilder,
				variableTable: newVariableTable,
				constantTable: t.constantTable,
				functionTable: t.functionTable,
			});
		}
	}

	visitPosition(n: Position, t: StaticCheckVisitorContext): CreatePosition | void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		const pos = {
			x: n.xCoordinate.accept(this, t),
			y: n.yCoordinate.accept(this, t)
		};

		if (!isCreatePosition(pos)) {
			t.errorBuilder.buildStaticError('Invalid position', {zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
		} else {
			return pos;
		}
	}

	visitOpExpression(n: OpExpression, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitVariableAssignment(n: VariableAssignment, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		const name = this.getStringTokenValue(n.name, t);
		if (t.variableTable.has(name)) {
			t.variableTable.set(name, n.value.accept(this, t));
		} else {
			t.errorBuilder.buildStaticError(`Variable ${name} is undefined`, n.name.range);
		}
	}

	visitCoordinateAccess(n: CoordinateAccess, t: StaticCheckVisitorContext): number {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		return 0;
	}

	visitCreateMarker(n: CreateMarker, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitCreatePolyline(n: CreatePolyline, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
		const type = this.getStringTokenValue(n.streetType, t);

		if (type !== 'highway' && type !== 'street' && type !== 'bridge') {
			t.errorBuilder.buildStaticError('Invalid street type', n.streetType.range);
		}

		const startPosition = n.startPosition.accept(this, t);
		const endPosition = n.endPosition.accept(this, t);
		if (!isCreatePosition(startPosition) || !isCreatePosition(endPosition)){
			t.errorBuilder.buildStaticError('Invalid positions',{zeroIndexStart: 0, zeroIndexEnd: 0});// TODO
		}
	}

	visitTokenNode(n: TokenNode, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
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

	private getStringTokenValue(token: TokenNode, t: StaticCheckVisitorContext): string {
		const str = token.accept(this, t);
		if (!isString(str)){
			t.errorBuilder.buildStaticError('Token is not a string',token.range);// TODO
			return "";
		}
		return str;
	}

	private getNumberTokenValue(token: TokenNode, t: StaticCheckVisitorContext): number {
		const num = token.accept(this, t);
		if (!isNumber(num)) {
			t.errorBuilder.buildStaticError('Token is not a number',token.range);// TODO
			return 0;
		}
		return Number(num);
	}

	visitAST(n: ASTNode, t: StaticCheckVisitorContext): void {
		console.log('visitAST was called');
	}
}
