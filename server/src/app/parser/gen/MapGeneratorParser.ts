// Generated from ./src/app/parser/MapGeneratorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MapGeneratorParserListener } from "./MapGeneratorParserListener";
import { MapGeneratorParserVisitor } from "./MapGeneratorParserVisitor";


export class MapGeneratorParser extends Parser {
	public static readonly WS = 1;
	public static readonly OPEN_CURLY = 2;
	public static readonly CLOSE_CURLY = 3;
	public static readonly OPEN_PAREN = 4;
	public static readonly CLOSE_PAREN = 5;
	public static readonly COMMA = 6;
	public static readonly CHAIN_OP = 7;
	public static readonly EQ = 8;
	public static readonly COORDINATE = 9;
	public static readonly VARIABLE = 10;
	public static readonly CONSTANT = 11;
	public static readonly FUNCTION = 12;
	public static readonly DEFINITIONS = 13;
	public static readonly TO = 14;
	public static readonly FROM = 15;
	public static readonly AT = 16;
	public static readonly AND = 17;
	public static readonly HIGHWAY = 18;
	public static readonly STREET = 19;
	public static readonly BRIDGE = 20;
	public static readonly TIMES = 21;
	public static readonly CREATE = 22;
	public static readonly SEMICOLON = 23;
	public static readonly STOP = 24;
	public static readonly TRAIN = 25;
	public static readonly TRAFFIC = 26;
	public static readonly BUS = 27;
	public static readonly SIGN = 28;
	public static readonly LIGHT = 29;
	public static readonly WATER = 30;
	public static readonly BUILDING = 31;
	public static readonly OUTPUT = 32;
	public static readonly END_OUTPUT = 33;
	public static readonly END_DEFINITION = 34;
	public static readonly LOOP = 35;
	public static readonly END_LOOP = 36;
	public static readonly IF = 37;
	public static readonly ELSE_IF = 38;
	public static readonly ELSE = 39;
	public static readonly THEN = 40;
	public static readonly END_IF = 41;
	public static readonly CANVAS = 42;
	public static readonly SIZE = 43;
	public static readonly BY = 44;
	public static readonly POSITIVE_NUMBER = 45;
	public static readonly NEGATIVE_NUMBER = 46;
	public static readonly TRUE = 47;
	public static readonly FALSE = 48;
	public static readonly OPERATOR = 49;
	public static readonly BUS_STOP = 50;
	public static readonly STOP_SIGN = 51;
	public static readonly TRAFFIC_LIGHT = 52;
	public static readonly TRAIN_STOP = 53;
	public static readonly CANVAS_SIZE = 54;
	public static readonly NAME = 55;
	public static readonly RULE_program = 0;
	public static readonly RULE_canvasConfiguration = 1;
	public static readonly RULE_definitionBlock = 2;
	public static readonly RULE_globalBodyElement = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_outputBlock = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_loopBlock = 7;
	public static readonly RULE_ifElseBlock = 8;
	public static readonly RULE_branchBody = 9;
	public static readonly RULE_variableAssignment = 10;
	public static readonly RULE_localVariableDeclaration = 11;
	public static readonly RULE_globalVariableDeclaration = 12;
	public static readonly RULE_createCall = 13;
	public static readonly RULE_markerOutput = 14;
	public static readonly RULE_streetOutput = 15;
	public static readonly RULE_polygonOutput = 16;
	public static readonly RULE_expression = 17;
	public static readonly RULE_firstOpExpr = 18;
	public static readonly RULE_opExpr = 19;
	public static readonly RULE_position = 20;
	public static readonly RULE_positionAccess = 21;
	public static readonly RULE_functionCall = 22;
	public static readonly RULE_token = 23;
	public static readonly RULE_functionName = 24;
	public static readonly RULE_parameterName = 25;
	public static readonly RULE_variableName = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "canvasConfiguration", "definitionBlock", "globalBodyElement", 
		"functionDeclaration", "outputBlock", "statement", "loopBlock", "ifElseBlock", 
		"branchBody", "variableAssignment", "localVariableDeclaration", "globalVariableDeclaration", 
		"createCall", "markerOutput", "streetOutput", "polygonOutput", "expression", 
		"firstOpExpr", "opExpr", "position", "positionAccess", "functionCall", 
		"token", "functionName", "parameterName", "variableName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'{'", "'}'", "'('", "')'", "','", "'.'", "'='", 
		undefined, "'VARIABLE'", "'CONSTANT'", "'FUNCTION'", "'DEFINITIONS'", 
		"'to'", "'from'", "'at'", "'and'", "'highway'", "'street'", "'bridge'", 
		"'TIMES'", "'CREATE'", "';'", "'stop'", "'train'", "'traffic'", "'bus'", 
		"'sign'", "'light'", "'water'", "'building'", "'OUTPUT'", "'END_OUTPUT'", 
		"'END_DEFINITIONS'", "'LOOP'", "'END_LOOP'", "'IF'", "'ELSE IF'", "'ELSE'", 
		"'THEN'", "'END_IF'", "'CANVAS'", "'SIZE'", "'by'", undefined, undefined, 
		"'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "OPEN_CURLY", "CLOSE_CURLY", "OPEN_PAREN", "CLOSE_PAREN", 
		"COMMA", "CHAIN_OP", "EQ", "COORDINATE", "VARIABLE", "CONSTANT", "FUNCTION", 
		"DEFINITIONS", "TO", "FROM", "AT", "AND", "HIGHWAY", "STREET", "BRIDGE", 
		"TIMES", "CREATE", "SEMICOLON", "STOP", "TRAIN", "TRAFFIC", "BUS", "SIGN", 
		"LIGHT", "WATER", "BUILDING", "OUTPUT", "END_OUTPUT", "END_DEFINITION", 
		"LOOP", "END_LOOP", "IF", "ELSE_IF", "ELSE", "THEN", "END_IF", "CANVAS", 
		"SIZE", "BY", "POSITIVE_NUMBER", "NEGATIVE_NUMBER", "TRUE", "FALSE", "OPERATOR", 
		"BUS_STOP", "STOP_SIGN", "TRAFFIC_LIGHT", "TRAIN_STOP", "CANVAS_SIZE", 
		"NAME",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MapGeneratorParser._LITERAL_NAMES, MapGeneratorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MapGeneratorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MapGeneratorParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return MapGeneratorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MapGeneratorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MapGeneratorParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MapGeneratorParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.CANVAS_SIZE) {
				{
				this.state = 54;
				this.canvasConfiguration();
				}
			}

			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.DEFINITIONS) {
				{
				this.state = 57;
				this.definitionBlock();
				}
			}

			this.state = 60;
			this.outputBlock();
			this.state = 61;
			this.match(MapGeneratorParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public canvasConfiguration(): CanvasConfigurationContext {
		let _localctx: CanvasConfigurationContext = new CanvasConfigurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MapGeneratorParser.RULE_canvasConfiguration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(MapGeneratorParser.CANVAS_SIZE);
			this.state = 64;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			this.state = 65;
			this.match(MapGeneratorParser.BY);
			this.state = 66;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionBlock(): DefinitionBlockContext {
		let _localctx: DefinitionBlockContext = new DefinitionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MapGeneratorParser.RULE_definitionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(MapGeneratorParser.DEFINITIONS);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 69;
				this.globalBodyElement();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapGeneratorParser.CONSTANT || _la === MapGeneratorParser.FUNCTION);
			this.state = 74;
			this.match(MapGeneratorParser.END_DEFINITION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalBodyElement(): GlobalBodyElementContext {
		let _localctx: GlobalBodyElementContext = new GlobalBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MapGeneratorParser.RULE_globalBodyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.FUNCTION:
				{
				this.state = 76;
				this.functionDeclaration();
				}
				break;
			case MapGeneratorParser.CONSTANT:
				{
				this.state = 77;
				this.globalVariableDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MapGeneratorParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(MapGeneratorParser.FUNCTION);
			this.state = 81;
			this.functionName();
			this.state = 82;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 83;
			this.parameterName();
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 84;
				this.match(MapGeneratorParser.COMMA);
				this.state = 85;
				this.parameterName();
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			this.state = 92;
			this.match(MapGeneratorParser.OPEN_CURLY);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 93;
				this.statement();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MapGeneratorParser.LOOP - 35)) | (1 << (MapGeneratorParser.IF - 35)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.TRUE - 35)) | (1 << (MapGeneratorParser.FALSE - 35)) | (1 << (MapGeneratorParser.NAME - 35)))) !== 0));
			this.state = 98;
			this.match(MapGeneratorParser.CLOSE_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputBlock(): OutputBlockContext {
		let _localctx: OutputBlockContext = new OutputBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MapGeneratorParser.RULE_outputBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(MapGeneratorParser.OUTPUT);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 101;
				this.statement();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MapGeneratorParser.LOOP - 35)) | (1 << (MapGeneratorParser.IF - 35)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.TRUE - 35)) | (1 << (MapGeneratorParser.FALSE - 35)) | (1 << (MapGeneratorParser.NAME - 35)))) !== 0));
			this.state = 106;
			this.match(MapGeneratorParser.END_OUTPUT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MapGeneratorParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 108;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				{
				this.state = 109;
				this.variableAssignment();
				}
				break;

			case 3:
				{
				this.state = 110;
				this.createCall();
				}
				break;

			case 4:
				{
				this.state = 111;
				this.loopBlock();
				}
				break;

			case 5:
				{
				this.state = 112;
				this.ifElseBlock();
				}
				break;

			case 6:
				{
				this.state = 113;
				this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopBlock(): LoopBlockContext {
		let _localctx: LoopBlockContext = new LoopBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapGeneratorParser.RULE_loopBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(MapGeneratorParser.LOOP);
			this.state = 117;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			this.state = 118;
			this.match(MapGeneratorParser.TIMES);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 119;
				this.statement();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MapGeneratorParser.LOOP - 35)) | (1 << (MapGeneratorParser.IF - 35)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.TRUE - 35)) | (1 << (MapGeneratorParser.FALSE - 35)) | (1 << (MapGeneratorParser.NAME - 35)))) !== 0));
			this.state = 124;
			this.match(MapGeneratorParser.END_LOOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseBlock(): IfElseBlockContext {
		let _localctx: IfElseBlockContext = new IfElseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapGeneratorParser.RULE_ifElseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(MapGeneratorParser.IF);
			this.state = 127;
			this.firstOpExpr();
			this.state = 128;
			this.match(MapGeneratorParser.THEN);
			this.state = 129;
			this.branchBody();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.ELSE_IF) {
				{
				{
				this.state = 130;
				this.match(MapGeneratorParser.ELSE_IF);
				this.state = 131;
				this.firstOpExpr();
				this.state = 132;
				this.match(MapGeneratorParser.THEN);
				this.state = 133;
				this.branchBody();
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.ELSE) {
				{
				this.state = 140;
				this.match(MapGeneratorParser.ELSE);
				this.state = 141;
				this.branchBody();
				}
			}

			this.state = 144;
			this.match(MapGeneratorParser.END_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public branchBody(): BranchBodyContext {
		let _localctx: BranchBodyContext = new BranchBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MapGeneratorParser.RULE_branchBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 146;
				this.statement();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MapGeneratorParser.LOOP - 35)) | (1 << (MapGeneratorParser.IF - 35)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 35)) | (1 << (MapGeneratorParser.TRUE - 35)) | (1 << (MapGeneratorParser.FALSE - 35)) | (1 << (MapGeneratorParser.NAME - 35)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableAssignment(): VariableAssignmentContext {
		let _localctx: VariableAssignmentContext = new VariableAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MapGeneratorParser.RULE_variableAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.variableName();
			this.state = 152;
			this.match(MapGeneratorParser.EQ);
			this.state = 153;
			this.expression();
			this.state = 154;
			this.match(MapGeneratorParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapGeneratorParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(MapGeneratorParser.VARIABLE);
			this.state = 157;
			this.variableName();
			this.state = 158;
			this.match(MapGeneratorParser.EQ);
			this.state = 159;
			this.expression();
			this.state = 160;
			this.match(MapGeneratorParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalVariableDeclaration(): GlobalVariableDeclarationContext {
		let _localctx: GlobalVariableDeclarationContext = new GlobalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MapGeneratorParser.RULE_globalVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(MapGeneratorParser.CONSTANT);
			this.state = 163;
			this.variableName();
			this.state = 164;
			this.match(MapGeneratorParser.EQ);
			this.state = 165;
			this.expression();
			this.state = 166;
			this.match(MapGeneratorParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createCall(): CreateCallContext {
		let _localctx: CreateCallContext = new CreateCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MapGeneratorParser.RULE_createCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(MapGeneratorParser.CREATE);
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.BUS_STOP:
			case MapGeneratorParser.STOP_SIGN:
			case MapGeneratorParser.TRAFFIC_LIGHT:
			case MapGeneratorParser.TRAIN_STOP:
				{
				this.state = 169;
				this.markerOutput();
				}
				break;
			case MapGeneratorParser.HIGHWAY:
			case MapGeneratorParser.STREET:
			case MapGeneratorParser.BRIDGE:
				{
				this.state = 170;
				this.streetOutput();
				}
				break;
			case MapGeneratorParser.WATER:
			case MapGeneratorParser.BUILDING:
				{
				this.state = 171;
				this.polygonOutput();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 174;
			this.match(MapGeneratorParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public markerOutput(): MarkerOutputContext {
		let _localctx: MarkerOutputContext = new MarkerOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MapGeneratorParser.RULE_markerOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (MapGeneratorParser.BUS_STOP - 50)) | (1 << (MapGeneratorParser.STOP_SIGN - 50)) | (1 << (MapGeneratorParser.TRAFFIC_LIGHT - 50)) | (1 << (MapGeneratorParser.TRAIN_STOP - 50)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 177;
			this.match(MapGeneratorParser.AT);
			this.state = 178;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public streetOutput(): StreetOutputContext {
		let _localctx: StreetOutputContext = new StreetOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MapGeneratorParser.RULE_streetOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.HIGHWAY) | (1 << MapGeneratorParser.STREET) | (1 << MapGeneratorParser.BRIDGE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 181;
			this.match(MapGeneratorParser.FROM);
			this.state = 182;
			this.expression();
			this.state = 183;
			this.match(MapGeneratorParser.TO);
			this.state = 184;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public polygonOutput(): PolygonOutputContext {
		let _localctx: PolygonOutputContext = new PolygonOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MapGeneratorParser.RULE_polygonOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			_la = this._input.LA(1);
			if (!(_la === MapGeneratorParser.WATER || _la === MapGeneratorParser.BUILDING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 187;
			this.match(MapGeneratorParser.AT);
			this.state = 188;
			this.expression();
			this.state = 189;
			this.expression();
			this.state = 190;
			this.expression();
			this.state = 191;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MapGeneratorParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 193;
				this.firstOpExpr();
				}
				break;

			case 2:
				{
				this.state = 194;
				this.opExpr();
				}
				break;

			case 3:
				{
				this.state = 195;
				this.position();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public firstOpExpr(): FirstOpExprContext {
		let _localctx: FirstOpExprContext = new FirstOpExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MapGeneratorParser.RULE_firstOpExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.opExpr();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.OPERATOR) {
				{
				{
				this.state = 199;
				this.match(MapGeneratorParser.OPERATOR);
				this.state = 200;
				this.opExpr();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opExpr(): OpExprContext {
		let _localctx: OpExprContext = new OpExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MapGeneratorParser.RULE_opExpr);
		let _la: number;
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.match(MapGeneratorParser.OPEN_PAREN);
				this.state = 207;
				this.opExpr();
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapGeneratorParser.OPERATOR) {
					{
					{
					this.state = 208;
					this.match(MapGeneratorParser.OPERATOR);
					this.state = 209;
					this.opExpr();
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 215;
				this.match(MapGeneratorParser.CLOSE_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.positionAccess();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this.functionCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 219;
				this.token();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MapGeneratorParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 222;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 223;
			this.firstOpExpr();
			this.state = 224;
			this.match(MapGeneratorParser.COMMA);
			this.state = 225;
			this.firstOpExpr();
			this.state = 226;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public positionAccess(): PositionAccessContext {
		let _localctx: PositionAccessContext = new PositionAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapGeneratorParser.RULE_positionAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(MapGeneratorParser.NAME);
			this.state = 229;
			this.match(MapGeneratorParser.CHAIN_OP);
			this.state = 230;
			this.match(MapGeneratorParser.COORDINATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MapGeneratorParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.functionName();
			this.state = 233;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 234;
			this.expression();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 235;
				this.match(MapGeneratorParser.COMMA);
				this.state = 236;
				this.expression();
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 242;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			this.state = 243;
			this.match(MapGeneratorParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public token(): TokenContext {
		let _localctx: TokenContext = new TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MapGeneratorParser.RULE_token);
		try {
			this.state = 250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.variableName();
				}
				break;
			case MapGeneratorParser.NEGATIVE_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.match(MapGeneratorParser.NEGATIVE_NUMBER);
				}
				break;
			case MapGeneratorParser.POSITIVE_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 247;
				this.match(MapGeneratorParser.POSITIVE_NUMBER);
				}
				break;
			case MapGeneratorParser.TRUE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 248;
				this.match(MapGeneratorParser.TRUE);
				}
				break;
			case MapGeneratorParser.FALSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 249;
				this.match(MapGeneratorParser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MapGeneratorParser.RULE_functionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(MapGeneratorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterName(): ParameterNameContext {
		let _localctx: ParameterNameContext = new ParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MapGeneratorParser.RULE_parameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(MapGeneratorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MapGeneratorParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(MapGeneratorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u0105\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x05\x02:\n\x02\x03\x02\x05\x02=\n\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04I\n\x04\r" +
		"\x04\x0E\x04J\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05Q\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06Y\n\x06\f\x06\x0E\x06\\\v" +
		"\x06\x03\x06\x03\x06\x03\x06\x06\x06a\n\x06\r\x06\x0E\x06b\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x06\x07i\n\x07\r\x07\x0E\x07j\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bu\n\b\x03\t\x03\t\x03\t\x03\t\x06" +
		"\t{\n\t\r\t\x0E\t|\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\x8A\n\n\f\n\x0E\n\x8D\v\n\x03\n\x03\n\x05\n\x91\n" +
		"\n\x03\n\x03\n\x03\v\x06\v\x96\n\v\r\v\x0E\v\x97\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAF\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\xC7\n\x13\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\xCC\n\x14\f\x14\x0E\x14\xCF\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x07\x15\xD5\n\x15\f\x15\x0E\x15\xD8\v\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\xDF\n\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\xF0\n\x18\f\x18\x0E\x18\xF3\v\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xFD\n\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x02\x1D" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x02\x02\x05\x03\x0247\x03\x02\x14\x16" +
		"\x03\x02 !\x02\u0107\x029\x03\x02\x02\x02\x04A\x03\x02\x02\x02\x06F\x03" +
		"\x02\x02\x02\bP\x03\x02\x02\x02\nR\x03\x02\x02\x02\ff\x03\x02\x02\x02" +
		"\x0Et\x03\x02\x02\x02\x10v\x03\x02\x02\x02\x12\x80\x03\x02\x02\x02\x14" +
		"\x95\x03\x02\x02\x02\x16\x99\x03\x02\x02\x02\x18\x9E\x03\x02\x02\x02\x1A" +
		"\xA4\x03\x02\x02\x02\x1C\xAA\x03\x02\x02\x02\x1E\xB2\x03\x02\x02\x02 " +
		"\xB6\x03\x02\x02\x02\"\xBC\x03\x02\x02\x02$\xC6\x03\x02\x02\x02&\xC8\x03" +
		"\x02\x02\x02(\xDE\x03\x02\x02\x02*\xE0\x03\x02\x02\x02,\xE6\x03\x02\x02" +
		"\x02.\xEA\x03\x02\x02\x020\xFC\x03\x02\x02\x022\xFE\x03\x02\x02\x024\u0100" +
		"\x03\x02\x02\x026\u0102\x03\x02\x02\x028:\x05\x04\x03\x0298\x03\x02\x02" +
		"\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02;=\x05\x06\x04\x02<;\x03\x02\x02" +
		"\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x05\f\x07\x02?@\x07\x02\x02" +
		"\x03@\x03\x03\x02\x02\x02AB\x078\x02\x02BC\x07/\x02\x02CD\x07.\x02\x02" +
		"DE\x07/\x02\x02E\x05\x03\x02\x02\x02FH\x07\x0F\x02\x02GI\x05\b\x05\x02" +
		"HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KL\x03\x02\x02\x02LM\x07$\x02\x02M\x07\x03\x02\x02\x02NQ\x05\n\x06\x02" +
		"OQ\x05\x1A\x0E\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02Q\t\x03\x02\x02" +
		"\x02RS\x07\x0E\x02\x02ST\x052\x1A\x02TU\x07\x06\x02\x02UZ\x054\x1B\x02" +
		"VW\x07\b\x02\x02WY\x054\x1B\x02XV\x03\x02\x02\x02Y\\\x03\x02\x02\x02Z" +
		"X\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02\x02" +
		"]^\x07\x07\x02\x02^`\x07\x04\x02\x02_a\x05\x0E\b\x02`_\x03\x02\x02\x02" +
		"ab\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02" +
		"de\x07\x05\x02\x02e\v\x03\x02\x02\x02fh\x07\"\x02\x02gi\x05\x0E\b\x02" +
		"hg\x03\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"kl\x03\x02\x02\x02lm\x07#\x02\x02m\r\x03\x02\x02\x02nu\x05\x18\r\x02o" +
		"u\x05\x16\f\x02pu\x05\x1C\x0F\x02qu\x05\x10\t\x02ru\x05\x12\n\x02su\x05" +
		"$\x13\x02tn\x03\x02\x02\x02to\x03\x02\x02\x02tp\x03\x02\x02\x02tq\x03" +
		"\x02\x02\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02u\x0F\x03\x02\x02\x02" +
		"vw\x07%\x02\x02wx\x07/\x02\x02xz\x07\x17\x02\x02y{\x05\x0E\b\x02zy\x03" +
		"\x02\x02\x02{|\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x03" +
		"\x02\x02\x02~\x7F\x07&\x02\x02\x7F\x11\x03\x02\x02\x02\x80\x81\x07\'\x02" +
		"\x02\x81\x82\x05&\x14\x02\x82\x83\x07*\x02\x02\x83\x8B\x05\x14\v\x02\x84" +
		"\x85\x07(\x02\x02\x85\x86\x05&\x14\x02\x86\x87\x07*\x02\x02\x87\x88\x05" +
		"\x14\v\x02\x88\x8A\x03\x02\x02\x02\x89\x84\x03\x02\x02\x02\x8A\x8D\x03" +
		"\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x90\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x07)\x02\x02\x8F\x91\x05" +
		"\x14\v\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03" +
		"\x02\x02\x02\x92\x93\x07+\x02\x02\x93\x13\x03\x02\x02\x02\x94\x96\x05" +
		"\x0E\b\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x95\x03" +
		"\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x15\x03\x02\x02\x02\x99\x9A\x05" +
		"6\x1C\x02\x9A\x9B\x07\n\x02\x02\x9B\x9C\x05$\x13\x02\x9C\x9D\x07\x19\x02" +
		"\x02\x9D\x17\x03\x02\x02\x02\x9E\x9F\x07\f\x02\x02\x9F\xA0\x056\x1C\x02" +
		"\xA0\xA1\x07\n\x02\x02\xA1\xA2\x05$\x13\x02\xA2\xA3\x07\x19\x02\x02\xA3" +
		"\x19\x03\x02\x02\x02\xA4\xA5\x07\r\x02\x02\xA5\xA6\x056\x1C\x02\xA6\xA7" +
		"\x07\n\x02\x02\xA7\xA8\x05$\x13\x02\xA8\xA9\x07\x19\x02\x02\xA9\x1B\x03" +
		"\x02\x02\x02\xAA\xAE\x07\x18\x02\x02\xAB\xAF\x05\x1E\x10\x02\xAC\xAF\x05" +
		" \x11\x02\xAD\xAF\x05\"\x12\x02\xAE\xAB\x03\x02\x02\x02\xAE\xAC\x03\x02" +
		"\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x07\x19" +
		"\x02\x02\xB1\x1D\x03\x02\x02\x02\xB2\xB3\t\x02\x02\x02\xB3\xB4\x07\x12" +
		"\x02\x02\xB4\xB5\x05$\x13\x02\xB5\x1F\x03\x02\x02\x02\xB6\xB7\t\x03\x02" +
		"\x02\xB7\xB8\x07\x11\x02\x02\xB8\xB9\x05$\x13\x02\xB9\xBA\x07\x10\x02" +
		"\x02\xBA\xBB\x05$\x13\x02\xBB!\x03\x02\x02\x02\xBC\xBD\t\x04\x02\x02\xBD" +
		"\xBE\x07\x12\x02\x02\xBE\xBF\x05$\x13\x02\xBF\xC0\x05$\x13\x02\xC0\xC1" +
		"\x05$\x13\x02\xC1\xC2\x05$\x13\x02\xC2#\x03\x02\x02\x02\xC3\xC7\x05&\x14" +
		"\x02\xC4\xC7\x05(\x15\x02\xC5\xC7\x05*\x16\x02\xC6\xC3\x03\x02\x02\x02" +
		"\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7%\x03\x02\x02\x02" +
		"\xC8\xCD\x05(\x15\x02\xC9\xCA\x073\x02\x02\xCA\xCC\x05(\x15\x02\xCB\xC9" +
		"\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE" +
		"\x03\x02\x02\x02\xCE\'\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1" +
		"\x07\x06\x02\x02\xD1\xD6\x05(\x15\x02\xD2\xD3\x073\x02\x02\xD3\xD5\x05" +
		"(\x15\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03" +
		"\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD9\xDA\x07\x07\x02\x02\xDA\xDF\x03\x02\x02\x02\xDB\xDF\x05" +
		",\x17\x02\xDC\xDF\x05.\x18\x02\xDD\xDF\x050\x19\x02\xDE\xD0\x03\x02\x02" +
		"\x02\xDE\xDB\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02" +
		"\x02\xDF)\x03\x02\x02\x02\xE0\xE1\x07\x06\x02\x02\xE1\xE2\x05&\x14\x02" +
		"\xE2\xE3\x07\b\x02\x02\xE3\xE4\x05&\x14\x02\xE4\xE5\x07\x07\x02\x02\xE5" +
		"+\x03\x02\x02\x02\xE6\xE7\x079\x02\x02\xE7\xE8\x07\t\x02\x02\xE8\xE9\x07" +
		"\v\x02\x02\xE9-\x03\x02\x02\x02\xEA\xEB\x052\x1A\x02\xEB\xEC\x07\x06\x02" +
		"\x02\xEC\xF1\x05$\x13\x02\xED\xEE\x07\b\x02\x02\xEE\xF0\x05$\x13\x02\xEF" +
		"\xED\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1" +
		"\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4" +
		"\xF5\x07\x07\x02\x02\xF5\xF6\x07\x19\x02\x02\xF6/\x03\x02\x02\x02\xF7" +
		"\xFD\x056\x1C\x02\xF8\xFD\x070\x02\x02\xF9\xFD\x07/\x02\x02\xFA\xFD\x07" +
		"1\x02\x02\xFB\xFD\x072\x02\x02\xFC\xF7\x03\x02\x02\x02\xFC\xF8\x03\x02" +
		"\x02\x02\xFC\xF9\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFB\x03\x02" +
		"\x02\x02\xFD1\x03\x02\x02\x02\xFE\xFF\x079\x02\x02\xFF3\x03\x02\x02\x02" +
		"\u0100\u0101\x079\x02\x02\u01015\x03\x02\x02\x02\u0102\u0103\x079\x02" +
		"\x02\u01037\x03\x02\x02\x02\x159<JPZbjt|\x8B\x90\x97\xAE\xC6\xCD\xD6\xDE" +
		"\xF1\xFC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MapGeneratorParser.__ATN) {
			MapGeneratorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MapGeneratorParser._serializedATN));
		}

		return MapGeneratorParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public outputBlock(): OutputBlockContext {
		return this.getRuleContext(0, OutputBlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(MapGeneratorParser.EOF, 0); }
	public canvasConfiguration(): CanvasConfigurationContext | undefined {
		return this.tryGetRuleContext(0, CanvasConfigurationContext);
	}
	public definitionBlock(): DefinitionBlockContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_program; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CanvasConfigurationContext extends ParserRuleContext {
	public CANVAS_SIZE(): TerminalNode { return this.getToken(MapGeneratorParser.CANVAS_SIZE, 0); }
	public POSITIVE_NUMBER(): TerminalNode[];
	public POSITIVE_NUMBER(i: number): TerminalNode;
	public POSITIVE_NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.POSITIVE_NUMBER);
		} else {
			return this.getToken(MapGeneratorParser.POSITIVE_NUMBER, i);
		}
	}
	public BY(): TerminalNode { return this.getToken(MapGeneratorParser.BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_canvasConfiguration; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterCanvasConfiguration) {
			listener.enterCanvasConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitCanvasConfiguration) {
			listener.exitCanvasConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitCanvasConfiguration) {
			return visitor.visitCanvasConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionBlockContext extends ParserRuleContext {
	public DEFINITIONS(): TerminalNode { return this.getToken(MapGeneratorParser.DEFINITIONS, 0); }
	public END_DEFINITION(): TerminalNode { return this.getToken(MapGeneratorParser.END_DEFINITION, 0); }
	public globalBodyElement(): GlobalBodyElementContext[];
	public globalBodyElement(i: number): GlobalBodyElementContext;
	public globalBodyElement(i?: number): GlobalBodyElementContext | GlobalBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GlobalBodyElementContext);
		} else {
			return this.getRuleContext(i, GlobalBodyElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_definitionBlock; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterDefinitionBlock) {
			listener.enterDefinitionBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitDefinitionBlock) {
			listener.exitDefinitionBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitDefinitionBlock) {
			return visitor.visitDefinitionBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalBodyElementContext extends ParserRuleContext {
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public globalVariableDeclaration(): GlobalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GlobalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_globalBodyElement; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterGlobalBodyElement) {
			listener.enterGlobalBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitGlobalBodyElement) {
			listener.exitGlobalBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitGlobalBodyElement) {
			return visitor.visitGlobalBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(MapGeneratorParser.FUNCTION, 0); }
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(MapGeneratorParser.OPEN_PAREN, 0); }
	public parameterName(): ParameterNameContext[];
	public parameterName(i: number): ParameterNameContext;
	public parameterName(i?: number): ParameterNameContext | ParameterNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterNameContext);
		} else {
			return this.getRuleContext(i, ParameterNameContext);
		}
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(MapGeneratorParser.CLOSE_PAREN, 0); }
	public OPEN_CURLY(): TerminalNode { return this.getToken(MapGeneratorParser.OPEN_CURLY, 0); }
	public CLOSE_CURLY(): TerminalNode { return this.getToken(MapGeneratorParser.CLOSE_CURLY, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.COMMA);
		} else {
			return this.getToken(MapGeneratorParser.COMMA, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputBlockContext extends ParserRuleContext {
	public OUTPUT(): TerminalNode { return this.getToken(MapGeneratorParser.OUTPUT, 0); }
	public END_OUTPUT(): TerminalNode { return this.getToken(MapGeneratorParser.END_OUTPUT, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_outputBlock; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterOutputBlock) {
			listener.enterOutputBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitOutputBlock) {
			listener.exitOutputBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitOutputBlock) {
			return visitor.visitOutputBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public variableAssignment(): VariableAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VariableAssignmentContext);
	}
	public createCall(): CreateCallContext | undefined {
		return this.tryGetRuleContext(0, CreateCallContext);
	}
	public loopBlock(): LoopBlockContext | undefined {
		return this.tryGetRuleContext(0, LoopBlockContext);
	}
	public ifElseBlock(): IfElseBlockContext | undefined {
		return this.tryGetRuleContext(0, IfElseBlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_statement; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopBlockContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(MapGeneratorParser.LOOP, 0); }
	public POSITIVE_NUMBER(): TerminalNode { return this.getToken(MapGeneratorParser.POSITIVE_NUMBER, 0); }
	public TIMES(): TerminalNode { return this.getToken(MapGeneratorParser.TIMES, 0); }
	public END_LOOP(): TerminalNode { return this.getToken(MapGeneratorParser.END_LOOP, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_loopBlock; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterLoopBlock) {
			listener.enterLoopBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitLoopBlock) {
			listener.exitLoopBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitLoopBlock) {
			return visitor.visitLoopBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseBlockContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(MapGeneratorParser.IF, 0); }
	public firstOpExpr(): FirstOpExprContext[];
	public firstOpExpr(i: number): FirstOpExprContext;
	public firstOpExpr(i?: number): FirstOpExprContext | FirstOpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FirstOpExprContext);
		} else {
			return this.getRuleContext(i, FirstOpExprContext);
		}
	}
	public THEN(): TerminalNode[];
	public THEN(i: number): TerminalNode;
	public THEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.THEN);
		} else {
			return this.getToken(MapGeneratorParser.THEN, i);
		}
	}
	public branchBody(): BranchBodyContext[];
	public branchBody(i: number): BranchBodyContext;
	public branchBody(i?: number): BranchBodyContext | BranchBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BranchBodyContext);
		} else {
			return this.getRuleContext(i, BranchBodyContext);
		}
	}
	public END_IF(): TerminalNode { return this.getToken(MapGeneratorParser.END_IF, 0); }
	public ELSE_IF(): TerminalNode[];
	public ELSE_IF(i: number): TerminalNode;
	public ELSE_IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.ELSE_IF);
		} else {
			return this.getToken(MapGeneratorParser.ELSE_IF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_ifElseBlock; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterIfElseBlock) {
			listener.enterIfElseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitIfElseBlock) {
			listener.exitIfElseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitIfElseBlock) {
			return visitor.visitIfElseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BranchBodyContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_branchBody; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterBranchBody) {
			listener.enterBranchBody(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitBranchBody) {
			listener.exitBranchBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitBranchBody) {
			return visitor.visitBranchBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAssignmentContext extends ParserRuleContext {
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(MapGeneratorParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_variableAssignment; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterVariableAssignment) {
			listener.enterVariableAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitVariableAssignment) {
			listener.exitVariableAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitVariableAssignment) {
			return visitor.visitVariableAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(MapGeneratorParser.VARIABLE, 0); }
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(MapGeneratorParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalVariableDeclarationContext extends ParserRuleContext {
	public CONSTANT(): TerminalNode { return this.getToken(MapGeneratorParser.CONSTANT, 0); }
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(MapGeneratorParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_globalVariableDeclaration; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterGlobalVariableDeclaration) {
			listener.enterGlobalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitGlobalVariableDeclaration) {
			listener.exitGlobalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitGlobalVariableDeclaration) {
			return visitor.visitGlobalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateCallContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(MapGeneratorParser.CREATE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	public markerOutput(): MarkerOutputContext | undefined {
		return this.tryGetRuleContext(0, MarkerOutputContext);
	}
	public streetOutput(): StreetOutputContext | undefined {
		return this.tryGetRuleContext(0, StreetOutputContext);
	}
	public polygonOutput(): PolygonOutputContext | undefined {
		return this.tryGetRuleContext(0, PolygonOutputContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_createCall; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterCreateCall) {
			listener.enterCreateCall(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitCreateCall) {
			listener.exitCreateCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitCreateCall) {
			return visitor.visitCreateCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerOutputContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(MapGeneratorParser.AT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public BUS_STOP(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.BUS_STOP, 0); }
	public STOP_SIGN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.STOP_SIGN, 0); }
	public TRAFFIC_LIGHT(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.TRAFFIC_LIGHT, 0); }
	public TRAIN_STOP(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.TRAIN_STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_markerOutput; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterMarkerOutput) {
			listener.enterMarkerOutput(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitMarkerOutput) {
			listener.exitMarkerOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitMarkerOutput) {
			return visitor.visitMarkerOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StreetOutputContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(MapGeneratorParser.FROM, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(MapGeneratorParser.TO, 0); }
	public HIGHWAY(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.HIGHWAY, 0); }
	public STREET(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.STREET, 0); }
	public BRIDGE(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.BRIDGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_streetOutput; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterStreetOutput) {
			listener.enterStreetOutput(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitStreetOutput) {
			listener.exitStreetOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitStreetOutput) {
			return visitor.visitStreetOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PolygonOutputContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(MapGeneratorParser.AT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WATER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.WATER, 0); }
	public BUILDING(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.BUILDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_polygonOutput; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterPolygonOutput) {
			listener.enterPolygonOutput(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitPolygonOutput) {
			listener.exitPolygonOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitPolygonOutput) {
			return visitor.visitPolygonOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public firstOpExpr(): FirstOpExprContext | undefined {
		return this.tryGetRuleContext(0, FirstOpExprContext);
	}
	public opExpr(): OpExprContext | undefined {
		return this.tryGetRuleContext(0, OpExprContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_expression; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FirstOpExprContext extends ParserRuleContext {
	public opExpr(): OpExprContext[];
	public opExpr(i: number): OpExprContext;
	public opExpr(i?: number): OpExprContext | OpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OpExprContext);
		} else {
			return this.getRuleContext(i, OpExprContext);
		}
	}
	public OPERATOR(): TerminalNode[];
	public OPERATOR(i: number): TerminalNode;
	public OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.OPERATOR);
		} else {
			return this.getToken(MapGeneratorParser.OPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_firstOpExpr; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterFirstOpExpr) {
			listener.enterFirstOpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitFirstOpExpr) {
			listener.exitFirstOpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitFirstOpExpr) {
			return visitor.visitFirstOpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpExprContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.OPEN_PAREN, 0); }
	public opExpr(): OpExprContext[];
	public opExpr(i: number): OpExprContext;
	public opExpr(i?: number): OpExprContext | OpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OpExprContext);
		} else {
			return this.getRuleContext(i, OpExprContext);
		}
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.CLOSE_PAREN, 0); }
	public OPERATOR(): TerminalNode[];
	public OPERATOR(i: number): TerminalNode;
	public OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.OPERATOR);
		} else {
			return this.getToken(MapGeneratorParser.OPERATOR, i);
		}
	}
	public positionAccess(): PositionAccessContext | undefined {
		return this.tryGetRuleContext(0, PositionAccessContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public token(): TokenContext | undefined {
		return this.tryGetRuleContext(0, TokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_opExpr; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterOpExpr) {
			listener.enterOpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitOpExpr) {
			listener.exitOpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitOpExpr) {
			return visitor.visitOpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.OPEN_PAREN, 0); }
	public firstOpExpr(): FirstOpExprContext[];
	public firstOpExpr(i: number): FirstOpExprContext;
	public firstOpExpr(i?: number): FirstOpExprContext | FirstOpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FirstOpExprContext);
		} else {
			return this.getRuleContext(i, FirstOpExprContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.COMMA, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.CLOSE_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_position; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionAccessContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
	public CHAIN_OP(): TerminalNode { return this.getToken(MapGeneratorParser.CHAIN_OP, 0); }
	public COORDINATE(): TerminalNode { return this.getToken(MapGeneratorParser.COORDINATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_positionAccess; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterPositionAccess) {
			listener.enterPositionAccess(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitPositionAccess) {
			listener.exitPositionAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitPositionAccess) {
			return visitor.visitPositionAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(MapGeneratorParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(MapGeneratorParser.CLOSE_PAREN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.COMMA);
		} else {
			return this.getToken(MapGeneratorParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokenContext extends ParserRuleContext {
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public NEGATIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.NEGATIVE_NUMBER, 0); }
	public POSITIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.POSITIVE_NUMBER, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_token; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterToken) {
			listener.enterToken(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitToken) {
			listener.exitToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitToken) {
			return visitor.visitToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_functionName; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_parameterName; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterParameterName) {
			listener.enterParameterName(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitParameterName) {
			listener.exitParameterName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitParameterName) {
			return visitor.visitParameterName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_variableName; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterVariableName) {
			listener.enterVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitVariableName) {
			listener.exitVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitVariableName) {
			return visitor.visitVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


