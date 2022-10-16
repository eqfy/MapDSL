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
	public static readonly HIGHWAY = 17;
	public static readonly STREET = 18;
	public static readonly BRIDGE = 19;
	public static readonly TIMES = 20;
	public static readonly CREATE = 21;
	public static readonly SEMICOLON = 22;
	public static readonly STOP = 23;
	public static readonly TRAIN = 24;
	public static readonly TRAFFIC = 25;
	public static readonly BUS = 26;
	public static readonly SIGN = 27;
	public static readonly LIGHT = 28;
	public static readonly OUTPUT = 29;
	public static readonly END_OUTPUT = 30;
	public static readonly END_DEFINITION = 31;
	public static readonly LOOP = 32;
	public static readonly END_LOOP = 33;
	public static readonly CANVAS = 34;
	public static readonly SIZE = 35;
	public static readonly BY = 36;
	public static readonly POSITIVE_NUMBER = 37;
	public static readonly NEGATIVE_NUMBER = 38;
	public static readonly OPERATOR = 39;
	public static readonly BUS_STOP = 40;
	public static readonly STOP_SIGN = 41;
	public static readonly TRAFFIC_LIGHT = 42;
	public static readonly TRAIN_STOP = 43;
	public static readonly CANVAS_SIZE = 44;
	public static readonly NAME = 45;
	public static readonly RULE_program = 0;
	public static readonly RULE_canvasConfiguration = 1;
	public static readonly RULE_definitionBlock = 2;
	public static readonly RULE_globalBodyElement = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_outputBlock = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_loopBlock = 7;
	public static readonly RULE_variableAssignment = 8;
	public static readonly RULE_localVariableDeclaration = 9;
	public static readonly RULE_globalVariableDeclaration = 10;
	public static readonly RULE_functionCall = 11;
	public static readonly RULE_createCall = 12;
	public static readonly RULE_markerOutput = 13;
	public static readonly RULE_streetOutput = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_operableExpr = 16;
	public static readonly RULE_operation = 17;
	public static readonly RULE_position = 18;
	public static readonly RULE_positionAccess = 19;
	public static readonly RULE_functionName = 20;
	public static readonly RULE_parameterName = 21;
	public static readonly RULE_variableName = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "canvasConfiguration", "definitionBlock", "globalBodyElement", 
		"functionDeclaration", "outputBlock", "statement", "loopBlock", "variableAssignment", 
		"localVariableDeclaration", "globalVariableDeclaration", "functionCall", 
		"createCall", "markerOutput", "streetOutput", "expression", "operableExpr", 
		"operation", "position", "positionAccess", "functionName", "parameterName", 
		"variableName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'{'", "'}'", "'('", "')'", "','", "'.'", "'='", 
		undefined, "'VARIABLE'", "'CONSTANT'", "'FUNCTION'", "'DEFINITIONS'", 
		"'to'", "'from'", "'at'", "'highway'", "'street'", "'bridge'", "'TIMES'", 
		"'CREATE'", "';'", "'stop'", "'train'", "'traffic'", "'bus'", "'sign'", 
		"'light'", "'OUTPUT'", "'END_OUTPUT'", "'END_DEFINITIONS'", "'LOOP'", 
		"'END_LOOP'", "'CANVAS'", "'SIZE'", "'by'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "OPEN_CURLY", "CLOSE_CURLY", "OPEN_PAREN", "CLOSE_PAREN", 
		"COMMA", "CHAIN_OP", "EQ", "COORDINATE", "VARIABLE", "CONSTANT", "FUNCTION", 
		"DEFINITIONS", "TO", "FROM", "AT", "HIGHWAY", "STREET", "BRIDGE", "TIMES", 
		"CREATE", "SEMICOLON", "STOP", "TRAIN", "TRAFFIC", "BUS", "SIGN", "LIGHT", 
		"OUTPUT", "END_OUTPUT", "END_DEFINITION", "LOOP", "END_LOOP", "CANVAS", 
		"SIZE", "BY", "POSITIVE_NUMBER", "NEGATIVE_NUMBER", "OPERATOR", "BUS_STOP", 
		"STOP_SIGN", "TRAFFIC_LIGHT", "TRAIN_STOP", "CANVAS_SIZE", "NAME",
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
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.CANVAS_SIZE) {
				{
				this.state = 46;
				this.canvasConfiguration();
				}
			}

			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.DEFINITIONS) {
				{
				this.state = 49;
				this.definitionBlock();
				}
			}

			this.state = 52;
			this.outputBlock();
			this.state = 53;
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
			this.state = 55;
			this.match(MapGeneratorParser.CANVAS_SIZE);
			this.state = 56;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			this.state = 57;
			this.match(MapGeneratorParser.BY);
			this.state = 58;
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
			this.state = 60;
			this.match(MapGeneratorParser.DEFINITIONS);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this.globalBodyElement();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapGeneratorParser.CONSTANT || _la === MapGeneratorParser.FUNCTION);
			this.state = 66;
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
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.FUNCTION:
				{
				this.state = 68;
				this.functionDeclaration();
				}
				break;
			case MapGeneratorParser.CONSTANT:
				{
				this.state = 69;
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
			this.state = 72;
			this.match(MapGeneratorParser.FUNCTION);
			this.state = 73;
			this.functionName();
			this.state = 74;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 75;
			this.parameterName();
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 76;
				this.match(MapGeneratorParser.COMMA);
				this.state = 77;
				this.parameterName();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			this.state = 84;
			this.match(MapGeneratorParser.OPEN_CURLY);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 85;
				this.statement();
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MapGeneratorParser.LOOP - 32)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 32)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 32)) | (1 << (MapGeneratorParser.NAME - 32)))) !== 0));
			this.state = 90;
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
			this.state = 92;
			this.match(MapGeneratorParser.OUTPUT);
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MapGeneratorParser.LOOP - 32)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 32)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 32)) | (1 << (MapGeneratorParser.NAME - 32)))) !== 0));
			this.state = 98;
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
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				{
				this.state = 101;
				this.variableAssignment();
				}
				break;

			case 3:
				{
				this.state = 102;
				this.createCall();
				}
				break;

			case 4:
				{
				this.state = 103;
				this.loopBlock();
				}
				break;

			case 5:
				{
				this.state = 104;
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
			this.state = 107;
			this.match(MapGeneratorParser.LOOP);
			this.state = 108;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			this.state = 109;
			this.match(MapGeneratorParser.TIMES);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 110;
				this.statement();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGeneratorParser.OPEN_PAREN) | (1 << MapGeneratorParser.VARIABLE) | (1 << MapGeneratorParser.CREATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MapGeneratorParser.LOOP - 32)) | (1 << (MapGeneratorParser.POSITIVE_NUMBER - 32)) | (1 << (MapGeneratorParser.NEGATIVE_NUMBER - 32)) | (1 << (MapGeneratorParser.NAME - 32)))) !== 0));
			this.state = 115;
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
	public variableAssignment(): VariableAssignmentContext {
		let _localctx: VariableAssignmentContext = new VariableAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapGeneratorParser.RULE_variableAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.variableName();
			this.state = 118;
			this.match(MapGeneratorParser.EQ);
			this.state = 119;
			this.expression();
			this.state = 120;
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
		this.enterRule(_localctx, 18, MapGeneratorParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(MapGeneratorParser.VARIABLE);
			this.state = 123;
			this.variableName();
			this.state = 124;
			this.match(MapGeneratorParser.EQ);
			this.state = 125;
			this.expression();
			this.state = 126;
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
		this.enterRule(_localctx, 20, MapGeneratorParser.RULE_globalVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(MapGeneratorParser.CONSTANT);
			this.state = 129;
			this.variableName();
			this.state = 130;
			this.match(MapGeneratorParser.EQ);
			this.state = 131;
			this.expression();
			this.state = 132;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapGeneratorParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.functionName();
			this.state = 135;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 136;
			this.expression();
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 137;
				this.match(MapGeneratorParser.COMMA);
				this.state = 138;
				this.expression();
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 144;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			this.state = 145;
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
		this.enterRule(_localctx, 24, MapGeneratorParser.RULE_createCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(MapGeneratorParser.CREATE);
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.BUS_STOP:
			case MapGeneratorParser.STOP_SIGN:
			case MapGeneratorParser.TRAFFIC_LIGHT:
			case MapGeneratorParser.TRAIN_STOP:
				{
				this.state = 148;
				this.markerOutput();
				}
				break;
			case MapGeneratorParser.HIGHWAY:
			case MapGeneratorParser.STREET:
			case MapGeneratorParser.BRIDGE:
				{
				this.state = 149;
				this.streetOutput();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 152;
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
		this.enterRule(_localctx, 26, MapGeneratorParser.RULE_markerOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (MapGeneratorParser.BUS_STOP - 40)) | (1 << (MapGeneratorParser.STOP_SIGN - 40)) | (1 << (MapGeneratorParser.TRAFFIC_LIGHT - 40)) | (1 << (MapGeneratorParser.TRAIN_STOP - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 155;
			this.match(MapGeneratorParser.AT);
			this.state = 156;
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
		this.enterRule(_localctx, 28, MapGeneratorParser.RULE_streetOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
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
			this.state = 159;
			this.match(MapGeneratorParser.FROM);
			this.state = 160;
			this.expression();
			this.state = 161;
			this.match(MapGeneratorParser.TO);
			this.state = 162;
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
		this.enterRule(_localctx, 30, MapGeneratorParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.POSITIVE_NUMBER:
			case MapGeneratorParser.NEGATIVE_NUMBER:
			case MapGeneratorParser.NAME:
				{
				this.state = 164;
				this.operableExpr();
				}
				break;
			case MapGeneratorParser.OPEN_PAREN:
				{
				this.state = 165;
				this.position();
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
	public operableExpr(): OperableExprContext {
		let _localctx: OperableExprContext = new OperableExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MapGeneratorParser.RULE_operableExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 168;
				this.positionAccess();
				}
				break;

			case 2:
				{
				this.state = 169;
				this.functionCall();
				}
				break;

			case 3:
				{
				this.state = 170;
				this.variableName();
				}
				break;

			case 4:
				{
				this.state = 171;
				this.match(MapGeneratorParser.NEGATIVE_NUMBER);
				}
				break;

			case 5:
				{
				this.state = 172;
				this.match(MapGeneratorParser.POSITIVE_NUMBER);
				}
				break;
			}
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.OPERATOR) {
				{
				this.state = 175;
				this.operation();
				}
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
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MapGeneratorParser.RULE_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(MapGeneratorParser.OPERATOR);
			this.state = 179;
			this.operableExpr();
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
		this.enterRule(_localctx, 36, MapGeneratorParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 181;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 182;
			this.operableExpr();
			this.state = 183;
			this.match(MapGeneratorParser.COMMA);
			this.state = 184;
			this.operableExpr();
			this.state = 185;
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
		this.enterRule(_localctx, 38, MapGeneratorParser.RULE_positionAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(MapGeneratorParser.NAME);
			this.state = 188;
			this.match(MapGeneratorParser.CHAIN_OP);
			this.state = 189;
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MapGeneratorParser.RULE_functionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
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
		this.enterRule(_localctx, 42, MapGeneratorParser.RULE_parameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
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
		this.enterRule(_localctx, 44, MapGeneratorParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xC8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x05\x022\n\x02\x03\x02\x05\x025\n\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04" +
		"A\n\x04\r\x04\x0E\x04B\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05I\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06Q\n\x06\f\x06" +
		"\x0E\x06T\v\x06\x03\x06\x03\x06\x03\x06\x06\x06Y\n\x06\r\x06\x0E\x06Z" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x06\x07a\n\x07\r\x07\x0E\x07b\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bl\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x06\tr\n\t\r\t\x0E\ts\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x07\r\x8E\n\r\f\r\x0E\r\x91\v\r\x03\r\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x99\n\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x05\x11\xA9\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\xB0\n\x12\x03\x12\x05\x12\xB3\n\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x02\x02" +
		"\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x02\x02\x04\x03\x02*-\x03\x02\x13\x15\x02\xC4\x02" +
		"1\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06>\x03\x02\x02\x02\bH\x03\x02" +
		"\x02\x02\nJ\x03\x02\x02\x02\f^\x03\x02\x02\x02\x0Ek\x03\x02\x02\x02\x10" +
		"m\x03\x02\x02\x02\x12w\x03\x02\x02\x02\x14|\x03\x02\x02\x02\x16\x82\x03" +
		"\x02\x02\x02\x18\x88\x03\x02\x02\x02\x1A\x95\x03\x02\x02\x02\x1C\x9C\x03" +
		"\x02\x02\x02\x1E\xA0\x03\x02\x02\x02 \xA8\x03\x02\x02\x02\"\xAF\x03\x02" +
		"\x02\x02$\xB4\x03\x02\x02\x02&\xB7\x03\x02\x02\x02(\xBD\x03\x02\x02\x02" +
		"*\xC1\x03\x02\x02\x02,\xC3\x03\x02\x02\x02.\xC5\x03\x02\x02\x0202\x05" +
		"\x04\x03\x0210\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0235\x05" +
		"\x06\x04\x0243\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x05" +
		"\f\x07\x0278\x07\x02\x02\x038\x03\x03\x02\x02\x029:\x07.\x02\x02:;\x07" +
		"\'\x02\x02;<\x07&\x02\x02<=\x07\'\x02\x02=\x05\x03\x02\x02\x02>@\x07\x0F" +
		"\x02\x02?A\x05\b\x05\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02" +
		"\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x07!\x02\x02E\x07\x03\x02" +
		"\x02\x02FI\x05\n\x06\x02GI\x05\x16\f\x02HF\x03\x02\x02\x02HG\x03\x02\x02" +
		"\x02I\t\x03\x02\x02\x02JK\x07\x0E\x02\x02KL\x05*\x16\x02LM\x07\x06\x02" +
		"\x02MR\x05,\x17\x02NO\x07\b\x02\x02OQ\x05,\x17\x02PN\x03\x02\x02\x02Q" +
		"T\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02UV\x07\x07\x02\x02VX\x07\x04\x02\x02WY\x05\x0E\b\x02" +
		"XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\\\x03\x02\x02\x02\\]\x07\x05\x02\x02]\v\x03\x02\x02\x02^`\x07\x1F\x02" +
		"\x02_a\x05\x0E\b\x02`_\x03\x02\x02\x02ab\x03\x02\x02\x02b`\x03\x02\x02" +
		"\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02de\x07 \x02\x02e\r\x03\x02\x02" +
		"\x02fl\x05\x14\v\x02gl\x05\x12\n\x02hl\x05\x1A\x0E\x02il\x05\x10\t\x02" +
		"jl\x05 \x11\x02kf\x03\x02\x02\x02kg\x03\x02\x02\x02kh\x03\x02\x02\x02" +
		"ki\x03\x02\x02\x02kj\x03\x02\x02\x02l\x0F\x03\x02\x02\x02mn\x07\"\x02" +
		"\x02no\x07\'\x02\x02oq\x07\x16\x02\x02pr\x05\x0E\b\x02qp\x03\x02\x02\x02" +
		"rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02" +
		"uv\x07#\x02\x02v\x11\x03\x02\x02\x02wx\x05.\x18\x02xy\x07\n\x02\x02yz" +
		"\x05 \x11\x02z{\x07\x18\x02\x02{\x13\x03\x02\x02\x02|}\x07\f\x02\x02}" +
		"~\x05.\x18\x02~\x7F\x07\n\x02\x02\x7F\x80\x05 \x11\x02\x80\x81\x07\x18" +
		"\x02\x02\x81\x15\x03\x02\x02\x02\x82\x83\x07\r\x02\x02\x83\x84\x05.\x18" +
		"\x02\x84\x85\x07\n\x02\x02\x85\x86\x05 \x11\x02\x86\x87\x07\x18\x02\x02" +
		"\x87\x17\x03\x02\x02\x02\x88\x89\x05*\x16\x02\x89\x8A\x07\x06\x02\x02" +
		"\x8A\x8F\x05 \x11\x02\x8B\x8C\x07\b\x02\x02\x8C\x8E\x05 \x11\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93" +
		"\x07\x07\x02\x02\x93\x94\x07\x18\x02\x02\x94\x19\x03\x02\x02\x02\x95\x98" +
		"\x07\x17\x02\x02\x96\x99\x05\x1C\x0F\x02\x97\x99\x05\x1E\x10\x02\x98\x96" +
		"\x03\x02\x02\x02\x98\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B" +
		"\x07\x18\x02\x02\x9B\x1B\x03\x02\x02\x02\x9C\x9D\t\x02\x02\x02\x9D\x9E" +
		"\x07\x12\x02\x02\x9E\x9F\x05 \x11\x02\x9F\x1D\x03\x02\x02\x02\xA0\xA1" +
		"\t\x03\x02\x02\xA1\xA2\x07\x11\x02\x02\xA2\xA3\x05 \x11\x02\xA3\xA4\x07" +
		"\x10\x02\x02\xA4\xA5\x05 \x11\x02\xA5\x1F\x03\x02\x02\x02\xA6\xA9\x05" +
		"\"\x12\x02\xA7\xA9\x05&\x14\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7\x03\x02" +
		"\x02\x02\xA9!\x03\x02\x02\x02\xAA\xB0\x05(\x15\x02\xAB\xB0\x05\x18\r\x02" +
		"\xAC\xB0\x05.\x18\x02\xAD\xB0\x07(\x02\x02\xAE\xB0\x07\'\x02\x02\xAF\xAA" +
		"\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02\x02\xAF\xAD" +
		"\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xB3" +
		"\x05$\x13\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3#\x03" +
		"\x02\x02\x02\xB4\xB5\x07)\x02\x02\xB5\xB6\x05\"\x12\x02\xB6%\x03\x02\x02" +
		"\x02\xB7\xB8\x07\x06\x02\x02\xB8\xB9\x05\"\x12\x02\xB9\xBA\x07\b\x02\x02" +
		"\xBA\xBB\x05\"\x12\x02\xBB\xBC\x07\x07\x02\x02\xBC\'\x03\x02\x02\x02\xBD" +
		"\xBE\x07/\x02\x02\xBE\xBF\x07\t\x02\x02\xBF\xC0\x07\v\x02\x02\xC0)\x03" +
		"\x02\x02\x02\xC1\xC2\x07/\x02\x02\xC2+\x03\x02\x02\x02\xC3\xC4\x07/\x02" +
		"\x02\xC4-\x03\x02\x02\x02\xC5\xC6\x07/\x02\x02\xC6/\x03\x02\x02\x02\x10" +
		"14BHRZbks\x8F\x98\xA8\xAF\xB2";
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


export class CreateCallContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(MapGeneratorParser.CREATE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	public markerOutput(): MarkerOutputContext | undefined {
		return this.tryGetRuleContext(0, MarkerOutputContext);
	}
	public streetOutput(): StreetOutputContext | undefined {
		return this.tryGetRuleContext(0, StreetOutputContext);
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


export class ExpressionContext extends ParserRuleContext {
	public operableExpr(): OperableExprContext | undefined {
		return this.tryGetRuleContext(0, OperableExprContext);
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


export class OperableExprContext extends ParserRuleContext {
	public positionAccess(): PositionAccessContext | undefined {
		return this.tryGetRuleContext(0, PositionAccessContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public NEGATIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.NEGATIVE_NUMBER, 0); }
	public POSITIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.POSITIVE_NUMBER, 0); }
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_operableExpr; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterOperableExpr) {
			listener.enterOperableExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitOperableExpr) {
			listener.exitOperableExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitOperableExpr) {
			return visitor.visitOperableExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(MapGeneratorParser.OPERATOR, 0); }
	public operableExpr(): OperableExprContext {
		return this.getRuleContext(0, OperableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_operation; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitOperation) {
			return visitor.visitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.OPEN_PAREN, 0); }
	public operableExpr(): OperableExprContext[];
	public operableExpr(i: number): OperableExprContext;
	public operableExpr(i?: number): OperableExprContext | OperableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperableExprContext);
		} else {
			return this.getRuleContext(i, OperableExprContext);
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


