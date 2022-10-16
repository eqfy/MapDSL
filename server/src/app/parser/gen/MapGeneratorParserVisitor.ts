// Generated from ./src/app/parser/MapGeneratorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./MapGeneratorParser";
import { CanvasConfigurationContext } from "./MapGeneratorParser";
import { DefinitionBlockContext } from "./MapGeneratorParser";
import { GlobalBodyElementContext } from "./MapGeneratorParser";
import { FunctionDeclarationContext } from "./MapGeneratorParser";
import { OutputBlockContext } from "./MapGeneratorParser";
import { StatementContext } from "./MapGeneratorParser";
import { LoopBlockContext } from "./MapGeneratorParser";
import { IfElseBlockContext } from "./MapGeneratorParser";
import { BranchBodyContext } from "./MapGeneratorParser";
import { VariableAssignmentContext } from "./MapGeneratorParser";
import { LocalVariableDeclarationContext } from "./MapGeneratorParser";
import { GlobalVariableDeclarationContext } from "./MapGeneratorParser";
import { CreateCallContext } from "./MapGeneratorParser";
import { MarkerOutputContext } from "./MapGeneratorParser";
import { StreetOutputContext } from "./MapGeneratorParser";
import { PolygonOutputContext } from "./MapGeneratorParser";
import { ExpressionContext } from "./MapGeneratorParser";
import { FirstOpExprContext } from "./MapGeneratorParser";
import { OpExprContext } from "./MapGeneratorParser";
import { PositionContext } from "./MapGeneratorParser";
import { PositionAccessContext } from "./MapGeneratorParser";
import { FunctionCallContext } from "./MapGeneratorParser";
import { TokenContext } from "./MapGeneratorParser";
import { FunctionNameContext } from "./MapGeneratorParser";
import { ParameterNameContext } from "./MapGeneratorParser";
import { VariableNameContext } from "./MapGeneratorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapGeneratorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MapGeneratorParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MapGeneratorParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.canvasConfiguration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCanvasConfiguration?: (ctx: CanvasConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.definitionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionBlock?: (ctx: DefinitionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.globalBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalBodyElement?: (ctx: GlobalBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.outputBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputBlock?: (ctx: OutputBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.loopBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopBlock?: (ctx: LoopBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.ifElseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseBlock?: (ctx: IfElseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.branchBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranchBody?: (ctx: BranchBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAssignment?: (ctx: VariableAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.globalVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalVariableDeclaration?: (ctx: GlobalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.createCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateCall?: (ctx: CreateCallContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.markerOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkerOutput?: (ctx: MarkerOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.streetOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStreetOutput?: (ctx: StreetOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.polygonOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygonOutput?: (ctx: PolygonOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.firstOpExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstOpExpr?: (ctx: FirstOpExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.opExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpExpr?: (ctx: OpExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.positionAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionAccess?: (ctx: PositionAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToken?: (ctx: TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.parameterName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterName?: (ctx: ParameterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;
}

