import { MapGeneratorParserVisitor } from "./gen/MapGeneratorParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import {
  CreateCallContext,
  DefinitionBlockContext,
  ExpressionContext,
  FunctionCallContext,
  FunctionDeclarationContext,
  GlobalBodyElementContext,
  GlobalVariableDeclarationContext,
  LocalVariableDeclarationContext,
  LoopBlockContext,
  MarkerOutputContext,
  OperableExprContext,
  OutputBlockContext,
  ParameterNameContext,
  PositionAccessContext,
  PositionContext,
  ProgramContext,
  StatementContext,
  StreetOutputContext,
  VariableAssignmentContext
} from "./gen/MapGeneratorParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import Program from "../ast/Program";
import ASTNode from "../ast/ASTNode";
import DefinitionBlock from "../ast/DefinitionBlock";
import OutputBlock from "../ast/OutputBlock";
import VariableAssignment from "../ast/statements/VariableAssignment";
import FunctionDeclaration from "../ast/FunctionDeclaration";
import LoopBlock from "../ast/statements/LoopBlock";
import Expression from "../ast/expressions/Expression";
import VariableDeclaration from "../ast/statements/VariableDeclaration";
import FunctionCall from "../ast/expressions/FunctionCall";
import CreatePolyline from "../ast/statements/CreatePolyline";
import CoordinateAccess from "../ast/expressions/CoordinateAccess";
import TokenNode, { TokenCtxTargetValueType } from "../ast/expressions/TokenNode";
import Position from "../ast/expressions/Position";
import Statement from "../ast/statements/Statement";
import OpExpression from "../ast/expressions/OpExpression";
import { OperableExpr } from "../ast/expressions/OperableExpr";
import CreateMarker from "../ast/statements/CreateMarker";
import { Range } from "../util/Range";
import { SemanticTokenInfo } from "../../languageServer/util/semanticTokens";
import { SemanticTokenModifiers, SemanticTokenTypes } from "vscode-languageserver";

export class ParseToASTVisitor extends AbstractParseTreeVisitor<ASTNode> implements MapGeneratorParserVisitor<ASTNode> {
  semanticTokenInfo: SemanticTokenInfo[];

  constructor() {
    super();
    this.semanticTokenInfo = [];
  }

  visitProgram(ctx: ProgramContext): Program {
    try {
      const output = this.visitOutputBlock(ctx.outputBlock());
      const def = this.visitDefinitionBlock(ctx.definitionBlock());
      const range = { start: def ? def.range.start : output.range.start, end: output.range.end };
      return new Program(range, output, def);
    } catch (err) {
      console.error(err);
      return new Program({ start: 0, end: 0 }, new OutputBlock({ start: 0, end: 0 }, []));
    }
  }

  visitDefinitionBlock(ctx: DefinitionBlockContext | undefined): DefinitionBlock {
    if (ctx)
      this.addSemanticTokenInfo([
        { token: ctx.DEFINITIONS(), type: SemanticTokenTypes.keyword, mods: [] },
        {
          token: ctx.END_DEFINITION(),
          type: SemanticTokenTypes.keyword,
          mods: []
        }
      ]);
    const globalBody = this.getGlobalBody(ctx?.globalBodyElement());
    const range = this.getRangeFromList(globalBody);
    return new DefinitionBlock(range, globalBody);
  }

  visitGlobalBodyElement(ctx: GlobalBodyElementContext): FunctionDeclaration | VariableDeclaration {
    const functionDeclarationCtx = ctx.functionDeclaration();
    const variableDeclarationCtx = ctx.globalVariableDeclaration();
    if (functionDeclarationCtx) {
      return this.visitFunctionDeclaration(functionDeclarationCtx);
    } else if (variableDeclarationCtx) {
      return this.visitGlobalVariableDeclaration(variableDeclarationCtx);
    } else {
      throw new Error(
        "Impossible - FunctionDeclaration and VariableDeclaration cannot both be undefined (enforced by Parser)"
      );
    }
  }

  visitGlobalVariableDeclaration(ctx: GlobalVariableDeclarationContext): VariableDeclaration {
    this.addSemanticTokenInfo([
      { token: ctx.CONSTANT(), type: SemanticTokenTypes.keyword, mods: [] },
      {
        token: ctx.EQ(),
        type: SemanticTokenTypes.operator,
        mods: []
      },
      {
        token: ctx.variableName().NAME(),
        type: SemanticTokenTypes.variable,
        mods: [SemanticTokenModifiers.declaration]
      }
    ]);
    return this.getVariableDeclaration(ctx, true);
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): FunctionDeclaration {
    this.addSemanticTokenInfo([
      { token: ctx.FUNCTION(), type: SemanticTokenTypes.keyword, mods: [] },
      {
        token: ctx.functionName().NAME(),
        type: SemanticTokenTypes.function,
        mods: [SemanticTokenModifiers.declaration]
      }
    ]);
    const name = this.getToken(ctx.functionName().NAME(), "string");
    const inputVariables = this.getInputVariables(ctx.parameterName());
    const statements = this.getStatements(ctx.statement());
    const range = this.getRangeFromList(statements, name.range);
    return new FunctionDeclaration(range, name, inputVariables, statements);
  }

  visitOutputBlock(ctx: OutputBlockContext): OutputBlock {
    this.addSemanticTokenInfo([
      { token: ctx.OUTPUT(), type: SemanticTokenTypes.keyword, mods: [] },
      { token: ctx.END_OUTPUT(), type: SemanticTokenTypes.keyword, mods: [] }
    ]);
    const statements = this.getStatements(ctx.statement());
    const range = this.getRangeFromList(statements);
    return new OutputBlock(range, statements);
  }

  visitStatement(ctx: StatementContext): Statement {
    const localVariableDeclarationCtx = ctx.localVariableDeclaration();
    const variableAssignmentCtx = ctx.variableAssignment();
    const createCallCtx = ctx.createCall();
    const expressionCtx = ctx.expression();
    const loopBlockCtx = ctx.loopBlock();

    let value;

    if (localVariableDeclarationCtx) {
      value = this.visitLocalVariableDeclaration(localVariableDeclarationCtx);
    } else if (variableAssignmentCtx) {
      value = this.visitVariableAssignment(variableAssignmentCtx);
    } else if (createCallCtx) {
      value = this.visitCreateCall(createCallCtx);
    } else if (loopBlockCtx) {
      value = this.visitLoopBlock(loopBlockCtx);
    } else if (expressionCtx) {
      // An expression can also be used in a statement position. The reverse is not true.
      // Hence, our implementation has expression extend statement.
      value = this.visitExpression(expressionCtx);
    } else {
      throw new Error(
        "Impossible - VariableDeclaration, VariableAssignment, CreateCall, and FunctionCall cannot all be undefined (enforced by Parser)"
      );
    }

    return value;
  }

  visitLoopBlock(ctx: LoopBlockContext): LoopBlock {
    this.addSemanticTokenInfo([
      { token: ctx.LOOP(), type: SemanticTokenTypes.keyword, mods: [] },
      {
        token: ctx.END_LOOP(),
        type: SemanticTokenTypes.keyword,
        mods: []
      },
      { token: ctx.TIMES(), type: SemanticTokenTypes.keyword, mods: [] },
      { token: ctx.POSITIVE_NUMBER(), type: SemanticTokenTypes.number, mods: [] }
    ]);
    const statements = this.getStatements(ctx.statement());
    const range = this.getRangeFromList(statements, {
      start: ctx.LOOP().symbol.startIndex,
      end: ctx.LOOP().symbol.stopIndex
    });
    return new LoopBlock(range, this.getToken(ctx.POSITIVE_NUMBER(), "number"), statements);
  }

  visitVariableAssignment(ctx: VariableAssignmentContext): VariableAssignment {
    this.addSemanticTokenInfo([
      { token: ctx.variableName().NAME(), type: SemanticTokenTypes.variable, mods: [SemanticTokenModifiers.modification] },
      {
        token: ctx.EQ(),
        type: SemanticTokenTypes.operator,
        mods: []
      }
    ]);
    const name = this.getToken(ctx.variableName().NAME(), "string");
    const value = this.visitExpression(ctx.expression());
    const range = { start: name.range.start, end: value.range.end };
    return new VariableAssignment(range, name, value);
  }

  visitLocalVariableDeclaration(ctx: LocalVariableDeclarationContext): VariableDeclaration {
    this.addSemanticTokenInfo([
      { token: ctx.VARIABLE(), type: SemanticTokenTypes.keyword, mods: [] },
      {
        token: ctx.EQ(),
        type: SemanticTokenTypes.operator,
        mods: []
      },
      { token: ctx.variableName().NAME(), type: SemanticTokenTypes.variable, mods: [SemanticTokenModifiers.declaration] }
    ]);
    return this.getVariableDeclaration(ctx, false);
  }

  visitFunctionCall(ctx: FunctionCallContext): FunctionCall {
    this.addSemanticTokenInfo([{ token: ctx.functionName().NAME(), type: SemanticTokenTypes.function, mods: [] }]);
    const name = this.getToken(ctx.functionName().NAME(), "string");
    const expressions = this.getExpressions(ctx.expression());
    const expRange = this.getRangeFromList(expressions, name.range);
    const range = { start: name.range.start, end: expRange.end };
    return new FunctionCall(range, name, expressions);
  }

  visitCreateCall(ctx: CreateCallContext): CreateMarker | CreatePolyline {
    this.addSemanticTokenInfo([{ token: ctx.CREATE(), type: SemanticTokenTypes.keyword, mods: [] }]);
    const streetOutputCtx = ctx.streetOutput();
    const markerOutputCtx = ctx.markerOutput();
    if (streetOutputCtx) {
      return this.visitStreetOutput(streetOutputCtx);
    } else if (markerOutputCtx) {
      return this.visitMarkerOutput(markerOutputCtx);
    } else {
      throw new Error("Impossible - MarkerOutput and StreetOutput cannot both be undefined (enforced by Parser)");
    }
  }

  visitMarkerOutput(ctx: MarkerOutputContext): CreateMarker {
    this.addSemanticTokenInfo([{ token: ctx.AT(), type: SemanticTokenTypes.modifier, mods: [] }]);
    const busStopCtx = ctx.BUS_STOP();
    const trafficLightCtx = ctx.TRAFFIC_LIGHT();
    const stopSignCtx = ctx.STOP_SIGN();
    const trainStopCtx = ctx.TRAIN_STOP();

    let type;

    if (busStopCtx) {
      type = busStopCtx;
    } else if (trafficLightCtx) {
      type = trafficLightCtx;
    } else if (stopSignCtx) {
      type = stopSignCtx;
    } else if (trainStopCtx) {
      type = trainStopCtx;
    } else {
      throw new Error(
        "Impossible - Bus Stop, Traffic Light, Stop Sign, and Train Stop cannot all be undefined (enforced by Parser)"
      );
    }
    this.addSemanticTokenInfo([{ token: type, type: SemanticTokenTypes.type, mods: [] }]);
    const markerType = this.getToken(type, "string");
    const position = this.visitExpression(ctx.expression());
    const range = { start: markerType.range.start, end: position.range.end };
    return new CreateMarker(range, markerType, position);
  }

  visitStreetOutput(ctx: StreetOutputContext): CreatePolyline {
    this.addSemanticTokenInfo([
      { token: ctx.FROM(), type: SemanticTokenTypes.modifier, mods: [] },
      { token: ctx.TO(), type: SemanticTokenTypes.modifier, mods: [] }
    ]);
    const streetCtx = ctx.STREET();
    const highwayCtx = ctx.HIGHWAY();
    const bridgeCtx = ctx.BRIDGE();

    let type;

    if (streetCtx) {
      type = streetCtx;
    } else if (highwayCtx) {
      type = highwayCtx;
    } else if (bridgeCtx) {
      type = bridgeCtx;
    } else {
      throw new Error("Impossible - Street, Highway, and Bridge cannot all be undefined (enforced by Parser)");
    }
    this.addSemanticTokenInfo([{ token: type, type: SemanticTokenTypes.type, mods: [] }]);

    const exprCtx1 = ctx.expression(0);
    const exprCtx2 = ctx.expression(1);

    const streetType = this.getToken(type, "string");
    const fromPosition = this.visitExpression(exprCtx1);
    const toPosition = this.visitExpression(exprCtx2);
    const range = { start: streetType.range.start, end: toPosition.range.end };
    return new CreatePolyline(range, streetType, fromPosition, toPosition);
  }

  visitExpression(ctx: ExpressionContext): Expression {
    // Parser enforces that we only have one of the following
    const positionCtx = ctx.position();
    const operableCtx = ctx.operableExpr();

    if (positionCtx) {
      return this.visitPosition(positionCtx);
    } else if (operableCtx) {
      return this.visitOperableExpr(operableCtx);
    } else {
      throw new Error(
        "Impossible - Position, Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)"
      );
    }
  }

  visitPosition(ctx: PositionContext): Position {
    const expressions = ctx.operableExpr();
    const x = this.visitOperableExpr(expressions[0]);
    const y = this.visitOperableExpr(expressions[1]);
    const range = { start: x.range.start, end: y.range.end };
    return new Position(range, x, y);
  }

  visitOperableExpr(ctx: OperableExprContext): OperableExpr | OpExpression {
    const positionAccessCtx = ctx.positionAccess();
    const functionCall = ctx.functionCall();
    const positiveNumberCtx = ctx.POSITIVE_NUMBER();
    const negativeNumberCtx = ctx.NEGATIVE_NUMBER();
    const variableNameCtx = ctx.variableName();

    let leftExpression: OperableExpr;
    if (positionAccessCtx) {
      leftExpression = this.visitPositionAccess(positionAccessCtx);
    } else if (functionCall) {
      leftExpression = this.visitFunctionCall(functionCall);
    } else if (positiveNumberCtx || negativeNumberCtx) {
      const number = positiveNumberCtx ? positiveNumberCtx : (negativeNumberCtx as TerminalNode);
      leftExpression = this.getToken(number, "number");
      this.addSemanticTokenInfo([{ token: number, type: SemanticTokenTypes.number, mods: [] }]);
    } else if (variableNameCtx) {
      leftExpression = this.getToken(variableNameCtx.NAME(), "assignedValue");
      this.addSemanticTokenInfo([{ token: variableNameCtx.NAME(), type: SemanticTokenTypes.variable, mods: [] }]);
    } else {
      throw new Error("Impossible - Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)");
    }

    const operationCtx = ctx.operation();
    if (operationCtx) {
      // This is some kind of operation (e.g. a + b)
      const op = this.getToken(operationCtx.OPERATOR(), "string");
      this.addSemanticTokenInfo([{ token: operationCtx.OPERATOR(), type: SemanticTokenTypes.operator, mods: [] }]);
      const rightExp = this.visitOperableExpr(operationCtx.operableExpr());
      const range = { start: leftExpression.range.start, end: rightExp.range.end };
      return new OpExpression(range, leftExpression, op, rightExp);
    } else {
      return leftExpression;
    }
  }

  visitPositionAccess(ctx: PositionAccessContext): CoordinateAccess {
    this.addSemanticTokenInfo([
      { token: ctx.NAME(), type: SemanticTokenTypes.variable, mods: [] },
      { token: ctx.COORDINATE(), type: SemanticTokenTypes.property, mods: [] }
    ]);
    const varName = this.getToken(ctx.NAME(), "string");
    const coordinate = this.getToken(ctx.COORDINATE(), "string");
    const range = { start: varName.range.start, end: coordinate.range.end };
    return new CoordinateAccess(range, varName, coordinate);
  }

  protected defaultResult(): ASTNode {
    return new Program({ start: 0, end: 0 }, new OutputBlock({ start: 0, end: 0 }, []));
  }

  private getVariableDeclaration(
    ctx: GlobalVariableDeclarationContext | LocalVariableDeclarationContext,
    isGlobalConstant: boolean
  ): VariableDeclaration {
    const varName = this.getToken(ctx.variableName().NAME(), "string");
    const varValue = this.visitExpression(ctx.expression());
    const range = { start: varName.range.start, end: varValue.range.end };
    return new VariableDeclaration(range, isGlobalConstant, varName, varValue);
  }

  private getGlobalBody(elements: GlobalBodyElementContext[] | undefined): (FunctionDeclaration | VariableDeclaration)[] {
    if (!elements) return [];
    const body: (FunctionDeclaration | VariableDeclaration)[] = [];
    for (const element of elements) {
      body.push(this.visitGlobalBodyElement(element));
    }
    return body;
  }

  private getToken(terminal: TerminalNode, targetValueType: TokenCtxTargetValueType): TokenNode {
    return new TokenNode(
      {
        start: terminal.symbol.startIndex,
        end: terminal.symbol.stopIndex
      },
      terminal.text,
      targetValueType
    );
  }

  private getInputVariables(parameterNameContexts: ParameterNameContext[]): TokenNode[] {
    const inputVariables = [];
    for (const parameter of parameterNameContexts) {
      this.addSemanticTokenInfo([{ token: parameter.NAME(), type: SemanticTokenTypes.parameter, mods: [] }]);
      inputVariables.push(this.getToken(parameter.NAME(), "string"));
    }
    return inputVariables;
  }

  private getStatements(statementContexts: StatementContext[]): Statement[] {
    const statements = [];
    for (const statement of statementContexts) {
      statements.push(this.visitStatement(statement));
    }
    return statements;
  }

  private getExpressions(expressionContexts: ExpressionContext[]): Expression[] {
    const expressions = [];
    for (const expression of expressionContexts) {
      expressions.push(this.visitExpression(expression));
    }
    return expressions;
  }

  private getRangeFromList(listOfNodes: ASTNode[], fallback?: Range): Range {
    if (listOfNodes.length > 1) {
      return { start: listOfNodes[0].range.start, end: listOfNodes[listOfNodes.length - 1].range.end };
    } else if (listOfNodes.length > 0) {
      return listOfNodes[0].range;
    } else {
      return fallback ? fallback : { start: 0, end: 0 };
    }
  }

  private addSemanticTokenInfo(
    semanticInformation: { token: TerminalNode; type: SemanticTokenTypes; mods: SemanticTokenModifiers[] }[]
  ) {
    for (const info of semanticInformation) {
      this.semanticTokenInfo.push({
        range: { start: info.token.symbol.startIndex, end: info.token.symbol.stopIndex + 1 },
        tokenType: info.type,
        tokenModifiers: info.mods
      });
    }
  }
}
