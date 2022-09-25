// Generated from ./src/parser/MapGeneratorParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly FUNCTION = 11;
	public static readonly DEFINITIONS = 12;
	public static readonly TO = 13;
	public static readonly FROM = 14;
	public static readonly AT = 15;
	public static readonly HIGHWAY = 16;
	public static readonly STREET = 17;
	public static readonly BRIDGE = 18;
	public static readonly TIMES = 19;
	public static readonly CREATE = 20;
	public static readonly SEMICOLON = 21;
	public static readonly STOP = 22;
	public static readonly TRAIN = 23;
	public static readonly TRAFFIC = 24;
	public static readonly BUS = 25;
	public static readonly SIGN = 26;
	public static readonly LIGHT = 27;
	public static readonly OUTPUT = 28;
	public static readonly END_OUTPUT = 29;
	public static readonly END_DEFINITION = 30;
	public static readonly LOOP = 31;
	public static readonly END_LOOP = 32;
	public static readonly POSITIVE_NUMBER = 33;
	public static readonly NEGATIVE_NUMBER = 34;
	public static readonly OPERATOR = 35;
	public static readonly BUS_STOP = 36;
	public static readonly STOP_SIGN = 37;
	public static readonly TRAFFIC_LIGHT = 38;
	public static readonly TRAIN_STOP = 39;
	public static readonly POSITION_ACCESS = 40;
	public static readonly NAME = 41;
	public static readonly RULE_program = 0;
	public static readonly RULE_definitionBlock = 1;
	public static readonly RULE_functionDeclaration = 2;
	public static readonly RULE_outputBlock = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_loopBlock = 5;
	public static readonly RULE_variableAssignment = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_variableDeclarationStatement = 8;
	public static readonly RULE_functionCall = 9;
	public static readonly RULE_createCall = 10;
	public static readonly RULE_markerOutput = 11;
	public static readonly RULE_streetOutput = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_position = 14;
	public static readonly RULE_number = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "definitionBlock", "functionDeclaration", "outputBlock", "statement", 
		"loopBlock", "variableAssignment", "variableDeclaration", "variableDeclarationStatement", 
		"functionCall", "createCall", "markerOutput", "streetOutput", "expression", 
		"position", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'{'", "'}'", "'('", "')'", "','", "'.'", "'='", 
		undefined, "'VARIABLE'", "'FUNCTION'", "'DEFINITIONS'", "'to'", "'from'", 
		"'at'", "'highway'", "'street'", "'bridge'", "'TIMES'", "'CREATE'", "';'", 
		"'stop'", "'train'", "'traffic'", "'bus'", "'sign'", "'light'", "'OUTPUT'", 
		"'END_OUTPUT'", "'END_DEFINITIONS'", "'LOOP'", "'END_LOOP'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "OPEN_CURLY", "CLOSE_CURLY", "OPEN_PAREN", "CLOSE_PAREN", 
		"COMMA", "CHAIN_OP", "EQ", "COORDINATE", "VARIABLE", "FUNCTION", "DEFINITIONS", 
		"TO", "FROM", "AT", "HIGHWAY", "STREET", "BRIDGE", "TIMES", "CREATE", 
		"SEMICOLON", "STOP", "TRAIN", "TRAFFIC", "BUS", "SIGN", "LIGHT", "OUTPUT", 
		"END_OUTPUT", "END_DEFINITION", "LOOP", "END_LOOP", "POSITIVE_NUMBER", 
		"NEGATIVE_NUMBER", "OPERATOR", "BUS_STOP", "STOP_SIGN", "TRAFFIC_LIGHT", 
		"TRAIN_STOP", "POSITION_ACCESS", "NAME",
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
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.DEFINITIONS) {
				{
				this.state = 32;
				this.definitionBlock();
				}
			}

			this.state = 35;
			this.outputBlock();
			this.state = 36;
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
	public definitionBlock(): DefinitionBlockContext {
		let _localctx: DefinitionBlockContext = new DefinitionBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MapGeneratorParser.RULE_definitionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(MapGeneratorParser.DEFINITIONS);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.VARIABLE || _la === MapGeneratorParser.FUNCTION) {
				{
				this.state = 41;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapGeneratorParser.FUNCTION:
					{
					this.state = 39;
					this.functionDeclaration();
					}
					break;
				case MapGeneratorParser.VARIABLE:
					{
					this.state = 40;
					this.variableDeclarationStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MapGeneratorParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(MapGeneratorParser.FUNCTION);
			this.state = 49;
			this.match(MapGeneratorParser.NAME);
			this.state = 50;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 51;
			this.match(MapGeneratorParser.NAME);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 52;
				this.match(MapGeneratorParser.COMMA);
				this.state = 53;
				this.match(MapGeneratorParser.NAME);
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			this.state = 60;
			this.match(MapGeneratorParser.OPEN_CURLY);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (MapGeneratorParser.VARIABLE - 10)) | (1 << (MapGeneratorParser.CREATE - 10)) | (1 << (MapGeneratorParser.LOOP - 10)) | (1 << (MapGeneratorParser.NAME - 10)))) !== 0)) {
				{
				this.state = 63;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapGeneratorParser.VARIABLE:
				case MapGeneratorParser.CREATE:
				case MapGeneratorParser.NAME:
					{
					this.state = 61;
					this.statement();
					}
					break;
				case MapGeneratorParser.LOOP:
					{
					this.state = 62;
					this.loopBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
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
		this.enterRule(_localctx, 6, MapGeneratorParser.RULE_outputBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(MapGeneratorParser.OUTPUT);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (MapGeneratorParser.VARIABLE - 10)) | (1 << (MapGeneratorParser.CREATE - 10)) | (1 << (MapGeneratorParser.LOOP - 10)) | (1 << (MapGeneratorParser.NAME - 10)))) !== 0)) {
				{
				this.state = 73;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapGeneratorParser.VARIABLE:
				case MapGeneratorParser.CREATE:
				case MapGeneratorParser.NAME:
					{
					this.state = 71;
					this.statement();
					}
					break;
				case MapGeneratorParser.LOOP:
					{
					this.state = 72;
					this.loopBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
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
		this.enterRule(_localctx, 8, MapGeneratorParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 80;
				this.variableDeclaration();
				}
				break;

			case 2:
				{
				this.state = 81;
				this.variableAssignment();
				}
				break;

			case 3:
				{
				this.state = 82;
				this.createCall();
				}
				break;

			case 4:
				{
				this.state = 83;
				this.functionCall();
				}
				break;
			}
			this.state = 86;
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
	public loopBlock(): LoopBlockContext {
		let _localctx: LoopBlockContext = new LoopBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MapGeneratorParser.RULE_loopBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(MapGeneratorParser.LOOP);
			this.state = 89;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			this.state = 90;
			this.match(MapGeneratorParser.TIMES);
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (MapGeneratorParser.VARIABLE - 10)) | (1 << (MapGeneratorParser.CREATE - 10)) | (1 << (MapGeneratorParser.NAME - 10)))) !== 0)) {
				{
				{
				this.state = 91;
				this.statement();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 97;
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
		this.enterRule(_localctx, 12, MapGeneratorParser.RULE_variableAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(MapGeneratorParser.NAME);
			this.state = 100;
			this.match(MapGeneratorParser.EQ);
			this.state = 101;
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapGeneratorParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(MapGeneratorParser.VARIABLE);
			this.state = 104;
			this.match(MapGeneratorParser.NAME);
			this.state = 105;
			this.match(MapGeneratorParser.EQ);
			this.state = 106;
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
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapGeneratorParser.RULE_variableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.variableDeclaration();
			this.state = 109;
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
		this.enterRule(_localctx, 18, MapGeneratorParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(MapGeneratorParser.NAME);
			this.state = 112;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 113;
			this.expression();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 114;
				this.match(MapGeneratorParser.COMMA);
				this.state = 115;
				this.expression();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.match(MapGeneratorParser.CLOSE_PAREN);
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
		this.enterRule(_localctx, 20, MapGeneratorParser.RULE_createCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(MapGeneratorParser.CREATE);
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.BUS_STOP:
			case MapGeneratorParser.STOP_SIGN:
			case MapGeneratorParser.TRAFFIC_LIGHT:
			case MapGeneratorParser.TRAIN_STOP:
				{
				this.state = 124;
				this.markerOutput();
				}
				break;
			case MapGeneratorParser.HIGHWAY:
			case MapGeneratorParser.STREET:
			case MapGeneratorParser.BRIDGE:
				{
				this.state = 125;
				this.streetOutput();
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
	public markerOutput(): MarkerOutputContext {
		let _localctx: MarkerOutputContext = new MarkerOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapGeneratorParser.RULE_markerOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (MapGeneratorParser.BUS_STOP - 36)) | (1 << (MapGeneratorParser.STOP_SIGN - 36)) | (1 << (MapGeneratorParser.TRAFFIC_LIGHT - 36)) | (1 << (MapGeneratorParser.TRAIN_STOP - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 129;
			this.match(MapGeneratorParser.AT);
			this.state = 130;
			this.position();
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
		this.enterRule(_localctx, 24, MapGeneratorParser.RULE_streetOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
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
			this.state = 133;
			this.match(MapGeneratorParser.FROM);
			this.state = 134;
			this.position();
			this.state = 135;
			this.match(MapGeneratorParser.TO);
			this.state = 136;
			this.position();
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
		this.enterRule(_localctx, 26, MapGeneratorParser.RULE_expression);
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapGeneratorParser.OPEN_PAREN:
				case MapGeneratorParser.NAME:
					{
					this.state = 138;
					this.position();
					}
					break;
				case MapGeneratorParser.POSITION_ACCESS:
					{
					this.state = 139;
					this.match(MapGeneratorParser.POSITION_ACCESS);
					}
					break;
				case MapGeneratorParser.POSITIVE_NUMBER:
				case MapGeneratorParser.NEGATIVE_NUMBER:
					{
					this.state = 140;
					this.number();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 146;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapGeneratorParser.POSITION_ACCESS:
					{
					this.state = 143;
					this.match(MapGeneratorParser.POSITION_ACCESS);
					}
					break;
				case MapGeneratorParser.POSITIVE_NUMBER:
				case MapGeneratorParser.NEGATIVE_NUMBER:
					{
					this.state = 144;
					this.number();
					}
					break;
				case MapGeneratorParser.NAME:
					{
					this.state = 145;
					this.match(MapGeneratorParser.NAME);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 148;
				this.match(MapGeneratorParser.OPERATOR);
				this.state = 149;
				this.expression();
				}
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
		this.enterRule(_localctx, 28, MapGeneratorParser.RULE_position);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 152;
				this.match(MapGeneratorParser.OPEN_PAREN);
				this.state = 153;
				this.expression();
				this.state = 154;
				this.match(MapGeneratorParser.COMMA);
				this.state = 155;
				this.expression();
				this.state = 156;
				this.match(MapGeneratorParser.CLOSE_PAREN);
				}
				}
				break;
			case MapGeneratorParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.match(MapGeneratorParser.NAME);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MapGeneratorParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			_la = this._input.LA(1);
			if (!(_la === MapGeneratorParser.POSITIVE_NUMBER || _la === MapGeneratorParser.NEGATIVE_NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xA6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x05\x02$" +
		"\n\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03,\n\x03" +
		"\f\x03\x0E\x03/\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x049\n\x04\f\x04\x0E\x04<\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04B\n\x04\f\x04\x0E\x04E\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x07\x05L\n\x05\f\x05\x0E\x05O\v\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06W\n\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07_\n\x07\f\x07\x0E\x07b\v\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vw\n\v\f\v\x0E\vz\v\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x05\f\x81\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x90\n" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x95\n\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\x99\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\xA2\n\x10\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x05\x03\x02&)\x03\x02\x12\x14\x03" +
		"\x02#$\x02\xA9\x02#\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x062\x03\x02" +
		"\x02\x02\bH\x03\x02\x02\x02\nV\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E" +
		"e\x03\x02\x02\x02\x10i\x03\x02\x02\x02\x12n\x03\x02\x02\x02\x14q\x03\x02" +
		"\x02\x02\x16}\x03\x02\x02\x02\x18\x82\x03\x02\x02\x02\x1A\x86\x03\x02" +
		"\x02\x02\x1C\x98\x03\x02\x02\x02\x1E\xA1\x03\x02\x02\x02 \xA3\x03\x02" +
		"\x02\x02\"$\x05\x04\x03\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03" +
		"\x02\x02\x02%&\x05\b\x05\x02&\'\x07\x02\x02\x03\'\x03\x03\x02\x02\x02" +
		"(-\x07\x0E\x02\x02),\x05\x06\x04\x02*,\x05\x12\n\x02+)\x03\x02\x02\x02" +
		"+*\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02" +
		".0\x03\x02\x02\x02/-\x03\x02\x02\x0201\x07 \x02\x021\x05\x03\x02\x02\x02" +
		"23\x07\r\x02\x0234\x07+\x02\x0245\x07\x06\x02\x025:\x07+\x02\x0267\x07" +
		"\b\x02\x0279\x07+\x02\x0286\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02" +
		"\x02\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02\x02\x02=>\x07\x07" +
		"\x02\x02>C\x07\x04\x02\x02?B\x05\n\x06\x02@B\x05\f\x07\x02A?\x03\x02\x02" +
		"\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02" +
		"\x02DF\x03\x02\x02\x02EC\x03\x02\x02\x02FG\x07\x05\x02\x02G\x07\x03\x02" +
		"\x02\x02HM\x07\x1E\x02\x02IL\x05\n\x06\x02JL\x05\f\x07\x02KI\x03\x02\x02" +
		"\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02" +
		"\x02NP\x03\x02\x02\x02OM\x03\x02\x02\x02PQ\x07\x1F\x02\x02Q\t\x03\x02" +
		"\x02\x02RW\x05\x10\t\x02SW\x05\x0E\b\x02TW\x05\x16\f\x02UW\x05\x14\v\x02" +
		"VR\x03\x02\x02\x02VS\x03\x02\x02\x02VT\x03\x02\x02\x02VU\x03\x02\x02\x02" +
		"WX\x03\x02\x02\x02XY\x07\x17\x02\x02Y\v\x03\x02\x02\x02Z[\x07!\x02\x02" +
		"[\\\x07#\x02\x02\\`\x07\x15\x02\x02]_\x05\n\x06\x02^]\x03\x02\x02\x02" +
		"_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02\x02" +
		"b`\x03\x02\x02\x02cd\x07\"\x02\x02d\r\x03\x02\x02\x02ef\x07+\x02\x02f" +
		"g\x07\n\x02\x02gh\x05\x1C\x0F\x02h\x0F\x03\x02\x02\x02ij\x07\f\x02\x02" +
		"jk\x07+\x02\x02kl\x07\n\x02\x02lm\x05\x1C\x0F\x02m\x11\x03\x02\x02\x02" +
		"no\x05\x10\t\x02op\x07\x17\x02\x02p\x13\x03\x02\x02\x02qr\x07+\x02\x02" +
		"rs\x07\x06\x02\x02sx\x05\x1C\x0F\x02tu\x07\b\x02\x02uw\x05\x1C\x0F\x02" +
		"vt\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02" +
		"y{\x03\x02\x02\x02zx\x03\x02\x02\x02{|\x07\x07\x02\x02|\x15\x03\x02\x02" +
		"\x02}\x80\x07\x16\x02\x02~\x81\x05\x18\r\x02\x7F\x81\x05\x1A\x0E\x02\x80" +
		"~\x03\x02\x02\x02\x80\x7F\x03\x02\x02\x02\x81\x17\x03\x02\x02\x02\x82" +
		"\x83\t\x02\x02\x02\x83\x84\x07\x11\x02\x02\x84\x85\x05\x1E\x10\x02\x85" +
		"\x19\x03\x02\x02\x02\x86\x87\t\x03\x02\x02\x87\x88\x07\x10\x02\x02\x88" +
		"\x89\x05\x1E\x10\x02\x89\x8A\x07\x0F\x02\x02\x8A\x8B\x05\x1E\x10\x02\x8B" +
		"\x1B\x03\x02\x02\x02\x8C\x90\x05\x1E\x10\x02\x8D\x90\x07*\x02\x02\x8E" +
		"\x90\x05 \x11\x02\x8F\x8C\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F" +
		"\x8E\x03\x02\x02\x02\x90\x99\x03\x02\x02\x02\x91\x95\x07*\x02\x02\x92" +
		"\x95\x05 \x11\x02\x93\x95\x07+\x02\x02\x94\x91\x03\x02\x02\x02\x94\x92" +
		"\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97" +
		"\x07%\x02\x02\x97\x99\x05\x1C\x0F\x02\x98\x8F\x03\x02\x02\x02\x98\x94" +
		"\x03\x02\x02\x02\x99\x1D\x03\x02\x02\x02\x9A\x9B\x07\x06\x02\x02\x9B\x9C" +
		"\x05\x1C\x0F\x02\x9C\x9D\x07\b\x02\x02\x9D\x9E\x05\x1C\x0F\x02\x9E\x9F" +
		"\x07\x07\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\xA2\x07+\x02\x02\xA1\x9A" +
		"\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x1F\x03\x02\x02\x02\xA3\xA4" +
		"\t\x04\x02\x02\xA4!\x03\x02\x02\x02\x12#+-:ACKMV`x\x80\x8F\x94\x98\xA1";
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


export class DefinitionBlockContext extends ParserRuleContext {
	public DEFINITIONS(): TerminalNode { return this.getToken(MapGeneratorParser.DEFINITIONS, 0); }
	public END_DEFINITION(): TerminalNode { return this.getToken(MapGeneratorParser.END_DEFINITION, 0); }
	public functionDeclaration(): FunctionDeclarationContext[];
	public functionDeclaration(i: number): FunctionDeclarationContext;
	public functionDeclaration(i?: number): FunctionDeclarationContext | FunctionDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclarationContext);
		} else {
			return this.getRuleContext(i, FunctionDeclarationContext);
		}
	}
	public variableDeclarationStatement(): VariableDeclarationStatementContext[];
	public variableDeclarationStatement(i: number): VariableDeclarationStatementContext;
	public variableDeclarationStatement(i?: number): VariableDeclarationStatementContext | VariableDeclarationStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationStatementContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationStatementContext);
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


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(MapGeneratorParser.FUNCTION, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGeneratorParser.NAME);
		} else {
			return this.getToken(MapGeneratorParser.NAME, i);
		}
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(MapGeneratorParser.OPEN_PAREN, 0); }
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
	public loopBlock(): LoopBlockContext[];
	public loopBlock(i: number): LoopBlockContext;
	public loopBlock(i?: number): LoopBlockContext | LoopBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LoopBlockContext);
		} else {
			return this.getRuleContext(i, LoopBlockContext);
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
	public loopBlock(): LoopBlockContext[];
	public loopBlock(i: number): LoopBlockContext;
	public loopBlock(i?: number): LoopBlockContext | LoopBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LoopBlockContext);
		} else {
			return this.getRuleContext(i, LoopBlockContext);
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
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableAssignment(): VariableAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VariableAssignmentContext);
	}
	public createCall(): CreateCallContext | undefined {
		return this.tryGetRuleContext(0, CreateCallContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
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
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
	public EQ(): TerminalNode { return this.getToken(MapGeneratorParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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


export class VariableDeclarationContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(MapGeneratorParser.VARIABLE, 0); }
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
	public EQ(): TerminalNode { return this.getToken(MapGeneratorParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MapGeneratorParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(MapGeneratorParser.NAME, 0); }
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
	public position(): PositionContext {
		return this.getRuleContext(0, PositionContext);
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
	public position(): PositionContext[];
	public position(i: number): PositionContext;
	public position(i?: number): PositionContext | PositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PositionContext);
		} else {
			return this.getRuleContext(i, PositionContext);
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
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public POSITION_ACCESS(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.POSITION_ACCESS, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.OPERATOR, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.NAME, 0); }
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


export class PositionContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.COMMA, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.CLOSE_PAREN, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.NAME, 0); }
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


export class NumberContext extends ParserRuleContext {
	public POSITIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.POSITIVE_NUMBER, 0); }
	public NEGATIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.NEGATIVE_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_number; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


