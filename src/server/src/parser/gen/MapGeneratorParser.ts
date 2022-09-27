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
	public static readonly POSITIVE_NUMBER = 34;
	public static readonly NEGATIVE_NUMBER = 35;
	public static readonly OPERATOR = 36;
	public static readonly BUS_STOP = 37;
	public static readonly STOP_SIGN = 38;
	public static readonly TRAFFIC_LIGHT = 39;
	public static readonly TRAIN_STOP = 40;
	public static readonly NAME = 41;
	public static readonly RULE_program = 0;
	public static readonly RULE_definitionBlock = 1;
	public static readonly RULE_functionDeclaration = 2;
	public static readonly RULE_outputBlock = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_loopBlock = 5;
	public static readonly RULE_variableAssignment = 6;
	public static readonly RULE_localVariableDeclaration = 7;
	public static readonly RULE_globalVariableDeclaration = 8;
	public static readonly RULE_functionCall = 9;
	public static readonly RULE_createCall = 10;
	public static readonly RULE_markerOutput = 11;
	public static readonly RULE_streetOutput = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_leftExpressionValue = 14;
	public static readonly RULE_position = 15;
	public static readonly RULE_bodyElement = 16;
	public static readonly RULE_globalBodyElement = 17;
	public static readonly RULE_positionAccess = 18;
	public static readonly RULE_functionName = 19;
	public static readonly RULE_parameterName = 20;
	public static readonly RULE_variableName = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "definitionBlock", "functionDeclaration", "outputBlock", "statement", 
		"loopBlock", "variableAssignment", "localVariableDeclaration", "globalVariableDeclaration", 
		"functionCall", "createCall", "markerOutput", "streetOutput", "expression", 
		"leftExpressionValue", "position", "bodyElement", "globalBodyElement", 
		"positionAccess", "functionName", "parameterName", "variableName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'{'", "'}'", "'('", "')'", "','", "'.'", "'='", 
		undefined, "'VARIABLE'", "'CONSTANT'", "'FUNCTION'", "'DEFINITIONS'", 
		"'to'", "'from'", "'at'", "'highway'", "'street'", "'bridge'", "'TIMES'", 
		"'CREATE'", "';'", "'stop'", "'train'", "'traffic'", "'bus'", "'sign'", 
		"'light'", "'OUTPUT'", "'END_OUTPUT'", "'END_DEFINITIONS'", "'LOOP'", 
		"'END_LOOP'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "OPEN_CURLY", "CLOSE_CURLY", "OPEN_PAREN", "CLOSE_PAREN", 
		"COMMA", "CHAIN_OP", "EQ", "COORDINATE", "VARIABLE", "CONSTANT", "FUNCTION", 
		"DEFINITIONS", "TO", "FROM", "AT", "HIGHWAY", "STREET", "BRIDGE", "TIMES", 
		"CREATE", "SEMICOLON", "STOP", "TRAIN", "TRAFFIC", "BUS", "SIGN", "LIGHT", 
		"OUTPUT", "END_OUTPUT", "END_DEFINITION", "LOOP", "END_LOOP", "POSITIVE_NUMBER", 
		"NEGATIVE_NUMBER", "OPERATOR", "BUS_STOP", "STOP_SIGN", "TRAFFIC_LIGHT", 
		"TRAIN_STOP", "NAME",
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
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.DEFINITIONS) {
				{
				this.state = 44;
				this.definitionBlock();
				}
			}

			this.state = 47;
			this.outputBlock();
			this.state = 48;
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
			this.state = 50;
			this.match(MapGeneratorParser.DEFINITIONS);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 51;
				this.globalBodyElement();
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapGeneratorParser.CONSTANT || _la === MapGeneratorParser.FUNCTION);
			this.state = 56;
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
			this.state = 58;
			this.match(MapGeneratorParser.FUNCTION);
			this.state = 59;
			this.functionName();
			this.state = 60;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 61;
			this.parameterName();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 62;
				this.match(MapGeneratorParser.COMMA);
				this.state = 63;
				this.parameterName();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
			this.match(MapGeneratorParser.CLOSE_PAREN);
			this.state = 70;
			this.match(MapGeneratorParser.OPEN_CURLY);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 71;
				this.bodyElement();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (MapGeneratorParser.VARIABLE - 10)) | (1 << (MapGeneratorParser.CREATE - 10)) | (1 << (MapGeneratorParser.LOOP - 10)) | (1 << (MapGeneratorParser.NAME - 10)))) !== 0));
			this.state = 76;
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
			this.state = 78;
			this.match(MapGeneratorParser.OUTPUT);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 79;
				this.bodyElement();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (MapGeneratorParser.VARIABLE - 10)) | (1 << (MapGeneratorParser.CREATE - 10)) | (1 << (MapGeneratorParser.LOOP - 10)) | (1 << (MapGeneratorParser.NAME - 10)))) !== 0));
			this.state = 84;
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
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 86;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				{
				this.state = 87;
				this.variableAssignment();
				}
				break;

			case 3:
				{
				this.state = 88;
				this.createCall();
				}
				break;

			case 4:
				{
				this.state = 89;
				this.functionCall();
				}
				break;
			}
			this.state = 92;
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
			this.state = 94;
			this.match(MapGeneratorParser.LOOP);
			this.state = 95;
			this.match(MapGeneratorParser.POSITIVE_NUMBER);
			this.state = 96;
			this.match(MapGeneratorParser.TIMES);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 97;
				this.statement();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (MapGeneratorParser.VARIABLE - 10)) | (1 << (MapGeneratorParser.CREATE - 10)) | (1 << (MapGeneratorParser.NAME - 10)))) !== 0));
			this.state = 102;
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
			this.state = 104;
			this.variableName();
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
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapGeneratorParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(MapGeneratorParser.VARIABLE);
			this.state = 109;
			this.variableName();
			this.state = 110;
			this.match(MapGeneratorParser.EQ);
			this.state = 111;
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
	public globalVariableDeclaration(): GlobalVariableDeclarationContext {
		let _localctx: GlobalVariableDeclarationContext = new GlobalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapGeneratorParser.RULE_globalVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(MapGeneratorParser.CONSTANT);
			this.state = 114;
			this.variableName();
			this.state = 115;
			this.match(MapGeneratorParser.EQ);
			this.state = 116;
			this.expression();
			this.state = 117;
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
			this.state = 119;
			this.functionName();
			this.state = 120;
			this.match(MapGeneratorParser.OPEN_PAREN);
			this.state = 121;
			this.expression();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGeneratorParser.COMMA) {
				{
				{
				this.state = 122;
				this.match(MapGeneratorParser.COMMA);
				this.state = 123;
				this.expression();
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 129;
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
			this.state = 131;
			this.match(MapGeneratorParser.CREATE);
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.BUS_STOP:
			case MapGeneratorParser.STOP_SIGN:
			case MapGeneratorParser.TRAFFIC_LIGHT:
			case MapGeneratorParser.TRAIN_STOP:
				{
				this.state = 132;
				this.markerOutput();
				}
				break;
			case MapGeneratorParser.HIGHWAY:
			case MapGeneratorParser.STREET:
			case MapGeneratorParser.BRIDGE:
				{
				this.state = 133;
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
			this.state = 136;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (MapGeneratorParser.BUS_STOP - 37)) | (1 << (MapGeneratorParser.STOP_SIGN - 37)) | (1 << (MapGeneratorParser.TRAFFIC_LIGHT - 37)) | (1 << (MapGeneratorParser.TRAIN_STOP - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 137;
			this.match(MapGeneratorParser.AT);
			this.state = 138;
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
			this.state = 140;
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
			this.state = 141;
			this.match(MapGeneratorParser.FROM);
			this.state = 142;
			this.position();
			this.state = 143;
			this.match(MapGeneratorParser.TO);
			this.state = 144;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.leftExpressionValue();
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGeneratorParser.OPERATOR) {
				{
				this.state = 147;
				this.match(MapGeneratorParser.OPERATOR);
				this.state = 148;
				this.expression();
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
	public leftExpressionValue(): LeftExpressionValueContext {
		let _localctx: LeftExpressionValueContext = new LeftExpressionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MapGeneratorParser.RULE_leftExpressionValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 151;
				this.positionAccess();
				}
				break;

			case 2:
				{
				this.state = 152;
				this.variableName();
				}
				break;

			case 3:
				{
				this.state = 153;
				this.position();
				}
				break;

			case 4:
				{
				this.state = 154;
				this.match(MapGeneratorParser.NEGATIVE_NUMBER);
				}
				break;

			case 5:
				{
				this.state = 155;
				this.match(MapGeneratorParser.POSITIVE_NUMBER);
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
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MapGeneratorParser.RULE_position);
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 158;
				this.match(MapGeneratorParser.OPEN_PAREN);
				this.state = 159;
				this.expression();
				this.state = 160;
				this.match(MapGeneratorParser.COMMA);
				this.state = 161;
				this.expression();
				this.state = 162;
				this.match(MapGeneratorParser.CLOSE_PAREN);
				}
				}
				break;
			case MapGeneratorParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 164;
				this.variableName();
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
	public bodyElement(): BodyElementContext {
		let _localctx: BodyElementContext = new BodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MapGeneratorParser.RULE_bodyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.VARIABLE:
			case MapGeneratorParser.CREATE:
			case MapGeneratorParser.NAME:
				{
				this.state = 167;
				this.statement();
				}
				break;
			case MapGeneratorParser.LOOP:
				{
				this.state = 168;
				this.loopBlock();
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
	public globalBodyElement(): GlobalBodyElementContext {
		let _localctx: GlobalBodyElementContext = new GlobalBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MapGeneratorParser.RULE_globalBodyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGeneratorParser.FUNCTION:
				{
				this.state = 171;
				this.functionDeclaration();
				}
				break;
			case MapGeneratorParser.CONSTANT:
				{
				this.state = 172;
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
	public positionAccess(): PositionAccessContext {
		let _localctx: PositionAccessContext = new PositionAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MapGeneratorParser.RULE_positionAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(MapGeneratorParser.NAME);
			this.state = 176;
			this.match(MapGeneratorParser.CHAIN_OP);
			this.state = 177;
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
		this.enterRule(_localctx, 38, MapGeneratorParser.RULE_functionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
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
		this.enterRule(_localctx, 40, MapGeneratorParser.RULE_parameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
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
		this.enterRule(_localctx, 42, MapGeneratorParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xBC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x05\x020\n\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06\x037\n" +
		"\x03\r\x03\x0E\x038\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04C\n\x04\f\x04\x0E\x04F\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x06\x04K\n\x04\r\x04\x0E\x04L\x03\x04\x03\x04\x03\x05\x03\x05\x06\x05" +
		"S\n\x05\r\x05\x0E\x05T\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06]\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07" +
		"e\n\x07\r\x07\x0E\x07f\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\x7F\n\v\f\v\x0E\v\x82\v\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x05\f\x89\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x98\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x9F\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xA8\n\x11\x03\x12\x03\x12" +
		"\x05\x12\xAC\n\x12\x03\x13\x03\x13\x05\x13\xB0\n\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x02" +
		"\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02\x02\x04\x03\x02\'*\x03\x02\x13\x15\x02\xB8\x02/\x03" +
		"\x02\x02\x02\x044\x03\x02\x02\x02\x06<\x03\x02\x02\x02\bP\x03\x02\x02" +
		"\x02\n\\\x03\x02\x02\x02\f`\x03\x02\x02\x02\x0Ej\x03\x02\x02\x02\x10n" +
		"\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14y\x03\x02\x02\x02\x16\x85\x03" +
		"\x02\x02\x02\x18\x8A\x03\x02\x02\x02\x1A\x8E\x03\x02\x02\x02\x1C\x94\x03" +
		"\x02\x02\x02\x1E\x9E\x03\x02\x02\x02 \xA7\x03\x02\x02\x02\"\xAB\x03\x02" +
		"\x02\x02$\xAF\x03\x02\x02\x02&\xB1\x03\x02\x02\x02(\xB5\x03\x02\x02\x02" +
		"*\xB7\x03\x02\x02\x02,\xB9\x03\x02\x02\x02.0\x05\x04\x03\x02/.\x03\x02" +
		"\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0212\x05\b\x05\x0223\x07\x02" +
		"\x02\x033\x03\x03\x02\x02\x0246\x07\x0F\x02\x0257\x05$\x13\x0265\x03\x02" +
		"\x02\x0278\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029:\x03\x02" +
		"\x02\x02:;\x07!\x02\x02;\x05\x03\x02\x02\x02<=\x07\x0E\x02\x02=>\x05(" +
		"\x15\x02>?\x07\x06\x02\x02?D\x05*\x16\x02@A\x07\b\x02\x02AC\x05*\x16\x02" +
		"B@\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EG\x03\x02\x02\x02FD\x03\x02\x02\x02GH\x07\x07\x02\x02HJ\x07\x04\x02\x02" +
		"IK\x05\"\x12\x02JI\x03\x02\x02\x02KL\x03\x02\x02\x02LJ\x03\x02\x02\x02" +
		"LM\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x07\x05\x02\x02O\x07\x03\x02\x02" +
		"\x02PR\x07\x1F\x02\x02QS\x05\"\x12\x02RQ\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x07 \x02" +
		"\x02W\t\x03\x02\x02\x02X]\x05\x10\t\x02Y]\x05\x0E\b\x02Z]\x05\x16\f\x02" +
		"[]\x05\x14\v\x02\\X\x03\x02\x02\x02\\Y\x03\x02\x02\x02\\Z\x03\x02\x02" +
		"\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x07\x18\x02\x02_\v\x03\x02" +
		"\x02\x02`a\x07\"\x02\x02ab\x07$\x02\x02bd\x07\x16\x02\x02ce\x05\n\x06" +
		"\x02dc\x03\x02\x02\x02ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02" +
		"\x02gh\x03\x02\x02\x02hi\x07#\x02\x02i\r\x03\x02\x02\x02jk\x05,\x17\x02" +
		"kl\x07\n\x02\x02lm\x05\x1C\x0F\x02m\x0F\x03\x02\x02\x02no\x07\f\x02\x02" +
		"op\x05,\x17\x02pq\x07\n\x02\x02qr\x05\x1C\x0F\x02r\x11\x03\x02\x02\x02" +
		"st\x07\r\x02\x02tu\x05,\x17\x02uv\x07\n\x02\x02vw\x05\x1C\x0F\x02wx\x07" +
		"\x18\x02\x02x\x13\x03\x02\x02\x02yz\x05(\x15\x02z{\x07\x06\x02\x02{\x80" +
		"\x05\x1C\x0F\x02|}\x07\b\x02\x02}\x7F\x05\x1C\x0F\x02~|\x03\x02\x02\x02" +
		"\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02" +
		"\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84\x07\x07\x02\x02" +
		"\x84\x15\x03\x02\x02\x02\x85\x88\x07\x17\x02\x02\x86\x89\x05\x18\r\x02" +
		"\x87\x89\x05\x1A\x0E\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02" +
		"\x89\x17\x03\x02\x02\x02\x8A\x8B\t\x02\x02\x02\x8B\x8C\x07\x12\x02\x02" +
		"\x8C\x8D\x05 \x11\x02\x8D\x19\x03\x02\x02\x02\x8E\x8F\t\x03\x02\x02\x8F" +
		"\x90\x07\x11\x02\x02\x90\x91\x05 \x11\x02\x91\x92\x07\x10\x02\x02\x92" +
		"\x93\x05 \x11\x02\x93\x1B\x03\x02\x02\x02\x94\x97\x05\x1E\x10\x02\x95" +
		"\x96\x07&\x02\x02\x96\x98\x05\x1C\x0F\x02\x97\x95\x03\x02\x02\x02\x97" +
		"\x98\x03\x02\x02\x02\x98\x1D\x03\x02\x02\x02\x99\x9F\x05&\x14\x02\x9A" +
		"\x9F\x05,\x17\x02\x9B\x9F\x05 \x11\x02\x9C\x9F\x07%\x02\x02\x9D\x9F\x07" +
		"$\x02\x02\x9E\x99\x03\x02\x02\x02\x9E\x9A\x03\x02\x02\x02\x9E\x9B\x03" +
		"\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\x1F\x03" +
		"\x02\x02\x02\xA0\xA1\x07\x06\x02\x02\xA1\xA2\x05\x1C\x0F\x02\xA2\xA3\x07" +
		"\b\x02\x02\xA3\xA4\x05\x1C\x0F\x02\xA4\xA5\x07\x07\x02\x02\xA5\xA8\x03" +
		"\x02\x02\x02\xA6\xA8\x05,\x17\x02\xA7\xA0\x03\x02\x02\x02\xA7\xA6\x03" +
		"\x02\x02\x02\xA8!\x03\x02\x02\x02\xA9\xAC\x05\n\x06\x02\xAA\xAC\x05\f" +
		"\x07\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC#\x03\x02" +
		"\x02\x02\xAD\xB0\x05\x06\x04\x02\xAE\xB0\x05\x12\n\x02\xAF\xAD\x03\x02" +
		"\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0%\x03\x02\x02\x02\xB1\xB2\x07+\x02" +
		"\x02\xB2\xB3\x07\t\x02\x02\xB3\xB4\x07\v\x02\x02\xB4\'\x03\x02\x02\x02" +
		"\xB5\xB6\x07+\x02\x02\xB6)\x03\x02\x02\x02\xB7\xB8\x07+\x02\x02\xB8+\x03" +
		"\x02\x02\x02\xB9\xBA\x07+\x02\x02\xBA-\x03\x02\x02\x02\x10/8DLT\\f\x80" +
		"\x88\x97\x9E\xA7\xAB\xAF";
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
	public bodyElement(): BodyElementContext[];
	public bodyElement(i: number): BodyElementContext;
	public bodyElement(i?: number): BodyElementContext | BodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyElementContext);
		} else {
			return this.getRuleContext(i, BodyElementContext);
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
	public bodyElement(): BodyElementContext[];
	public bodyElement(i: number): BodyElementContext;
	public bodyElement(i?: number): BodyElementContext | BodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyElementContext);
		} else {
			return this.getRuleContext(i, BodyElementContext);
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
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
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
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
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


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(MapGeneratorParser.VARIABLE, 0); }
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(MapGeneratorParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public leftExpressionValue(): LeftExpressionValueContext {
		return this.getRuleContext(0, LeftExpressionValueContext);
	}
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.OPERATOR, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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


export class LeftExpressionValueContext extends ParserRuleContext {
	public positionAccess(): PositionAccessContext | undefined {
		return this.tryGetRuleContext(0, PositionAccessContext);
	}
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public NEGATIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.NEGATIVE_NUMBER, 0); }
	public POSITIVE_NUMBER(): TerminalNode | undefined { return this.tryGetToken(MapGeneratorParser.POSITIVE_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_leftExpressionValue; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterLeftExpressionValue) {
			listener.enterLeftExpressionValue(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitLeftExpressionValue) {
			listener.exitLeftExpressionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitLeftExpressionValue) {
			return visitor.visitLeftExpressionValue(this);
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
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
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


export class BodyElementContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public loopBlock(): LoopBlockContext | undefined {
		return this.tryGetRuleContext(0, LoopBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGeneratorParser.RULE_bodyElement; }
	// @Override
	public enterRule(listener: MapGeneratorParserListener): void {
		if (listener.enterBodyElement) {
			listener.enterBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: MapGeneratorParserListener): void {
		if (listener.exitBodyElement) {
			listener.exitBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGeneratorParserVisitor<Result>): Result {
		if (visitor.visitBodyElement) {
			return visitor.visitBodyElement(this);
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


