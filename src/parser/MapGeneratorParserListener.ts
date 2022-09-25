// Generated from ./src/parser/MapGeneratorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./MapGeneratorParser";
import { DefinitionBlockContext } from "./MapGeneratorParser";
import { FunctionDeclarationContext } from "./MapGeneratorParser";
import { OutputBlockContext } from "./MapGeneratorParser";
import { StatementContext } from "./MapGeneratorParser";
import { LoopBlockContext } from "./MapGeneratorParser";
import { VariableAssignmentContext } from "./MapGeneratorParser";
import { VariableDeclarationContext } from "./MapGeneratorParser";
import { VariableDeclarationStatementContext } from "./MapGeneratorParser";
import { FunctionCallContext } from "./MapGeneratorParser";
import { CreateCallContext } from "./MapGeneratorParser";
import { MarkerOutputContext } from "./MapGeneratorParser";
import { StreetOutputContext } from "./MapGeneratorParser";
import { ExpressionContext } from "./MapGeneratorParser";
import { PositionContext } from "./MapGeneratorParser";
import { NumberContext } from "./MapGeneratorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MapGeneratorParser`.
 */
export interface MapGeneratorParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MapGeneratorParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.definitionBlock`.
	 * @param ctx the parse tree
	 */
	enterDefinitionBlock?: (ctx: DefinitionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.definitionBlock`.
	 * @param ctx the parse tree
	 */
	exitDefinitionBlock?: (ctx: DefinitionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.outputBlock`.
	 * @param ctx the parse tree
	 */
	enterOutputBlock?: (ctx: OutputBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.outputBlock`.
	 * @param ctx the parse tree
	 */
	exitOutputBlock?: (ctx: OutputBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.loopBlock`.
	 * @param ctx the parse tree
	 */
	enterLoopBlock?: (ctx: LoopBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.loopBlock`.
	 * @param ctx the parse tree
	 */
	exitLoopBlock?: (ctx: LoopBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.variableAssignment`.
	 * @param ctx the parse tree
	 */
	enterVariableAssignment?: (ctx: VariableAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.variableAssignment`.
	 * @param ctx the parse tree
	 */
	exitVariableAssignment?: (ctx: VariableAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.variableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.variableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.createCall`.
	 * @param ctx the parse tree
	 */
	enterCreateCall?: (ctx: CreateCallContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.createCall`.
	 * @param ctx the parse tree
	 */
	exitCreateCall?: (ctx: CreateCallContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.markerOutput`.
	 * @param ctx the parse tree
	 */
	enterMarkerOutput?: (ctx: MarkerOutputContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.markerOutput`.
	 * @param ctx the parse tree
	 */
	exitMarkerOutput?: (ctx: MarkerOutputContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.streetOutput`.
	 * @param ctx the parse tree
	 */
	enterStreetOutput?: (ctx: StreetOutputContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.streetOutput`.
	 * @param ctx the parse tree
	 */
	exitStreetOutput?: (ctx: StreetOutputContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by `MapGeneratorParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `MapGeneratorParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

