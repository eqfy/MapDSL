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
	}

	visitDefinitionBlock(n: DefinitionBlock, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitOutputBlock(n: OutputBlock, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitVariableDeclaration(n: VariableDeclaration, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitFunctionDeclaration(n: FunctionDeclaration, t: StaticCheckVisitorContext): void {
		const name = this.getStringTokenValue(n.name, t);// TODO update (if needed) to do some static checks
		t.functionTable.set(name, n);
	}

	visitLoopBlock(n: LoopBlock, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitFunctionCall(n: FunctionCall, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitPosition(n: Position, t: StaticCheckVisitorContext): CreatePosition | void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitOpExpression(n: OpExpression, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	visitVariableAssignment(n: VariableAssignment, t: StaticCheckVisitorContext): void {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
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
	}

	visitTokenNode(n: TokenNode, t: StaticCheckVisitorContext): StaticCheckVisitorReturnType {
		// TODO implement static checks. Copy and paste method from OutputVisitor.ts if needed.
	}

	private getStringTokenValue(token: TokenNode, t: StaticCheckVisitorContext): string {
		const str = token.accept(this, t);
		if (!isString(str)) throw new Error('Token is not a string');
		return str;
	}

	private getNumberTokenValue(token: TokenNode, t: StaticCheckVisitorContext): number {
		const num = token.accept(this, t);
		if (!isNumber(num)) throw new Error('Token is not a number');
		return Number(num);
	}

	visitAST(n: ASTNode, t: StaticCheckVisitorContext): void {
		console.log('visitAST was called');
	}
}
