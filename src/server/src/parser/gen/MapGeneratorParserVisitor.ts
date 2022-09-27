// Generated from ./src/parser/MapGeneratorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./MapGeneratorParser";
import { DefinitionBlockContext } from "./MapGeneratorParser";
import { FunctionDeclarationContext } from "./MapGeneratorParser";
import { OutputBlockContext } from "./MapGeneratorParser";
import { StatementContext } from "./MapGeneratorParser";
import { LoopBlockContext } from "./MapGeneratorParser";
import { VariableAssignmentContext } from "./MapGeneratorParser";
import { LocalVariableDeclarationContext } from "./MapGeneratorParser";
import { GlobalVariableDeclarationContext } from "./MapGeneratorParser";
import { FunctionCallContext } from "./MapGeneratorParser";
import { CreateCallContext } from "./MapGeneratorParser";
import { MarkerOutputContext } from "./MapGeneratorParser";
import { StreetOutputContext } from "./MapGeneratorParser";
import { ExpressionContext } from "./MapGeneratorParser";
import { LeftExpressionValueContext } from "./MapGeneratorParser";
import { PositionContext } from "./MapGeneratorParser";
import { BodyElementContext } from "./MapGeneratorParser";
import { GlobalBodyElementContext } from "./MapGeneratorParser";
import { PositionAccessContext } from "./MapGeneratorParser";
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
	 * Visit a parse tree produced by `MapGeneratorParser.definitionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionBlock?: (ctx: DefinitionBlockContext) => Result;

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
	 * Visit a parse tree produced by `MapGeneratorParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

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
	 * Visit a parse tree produced by `MapGeneratorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.leftExpressionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftExpressionValue?: (ctx: LeftExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.bodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodyElement?: (ctx: BodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.globalBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalBodyElement?: (ctx: GlobalBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `MapGeneratorParser.positionAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionAccess?: (ctx: PositionAccessContext) => Result;

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

