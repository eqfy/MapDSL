import { MapGeneratorParserVisitor } from './gen/MapGeneratorParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
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
} from './gen/MapGeneratorParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import Program from '../ast/Program';
import ASTNode from '../ast/ASTNode';
import DefinitionBlock from '../ast/DefinitionBlock';
import OutputBlock from '../ast/OutputBlock';
import VariableAssignment from '../ast/statements/VariableAssignment';
import FunctionDeclaration from '../ast/FunctionDeclaration';
import LoopBlock from '../ast/statements/LoopBlock';
import Expression from '../ast/expressions/Expression';
import VariableDeclaration from '../ast/statements/VariableDeclaration';
import FunctionCall from '../ast/expressions/FunctionCall';
import CreatePolyline from '../ast/statements/CreatePolyline';
import CoordinateAccess from '../ast/expressions/CoordinateAccess';
import TokenNode, { TokenCtxTargetValueType } from '../ast/expressions/TokenNode';
import Position from '../ast/expressions/Position';
import Statement from '../ast/statements/Statement';
import OpExpression from '../ast/expressions/OpExpression';
import { OperableExpr } from '../ast/expressions/OperableExpr';
import CreateMarker from '../ast/statements/CreateMarker';

export class ParseToASTVisitor extends AbstractParseTreeVisitor<ASTNode> implements MapGeneratorParserVisitor<ASTNode> {
  visitProgram(ctx: ProgramContext): Program {
    return new Program(this.visitOutputBlock(ctx.outputBlock()), this.visitDefinitionBlock(ctx.definitionBlock()));
  }

  visitDefinitionBlock(ctx: DefinitionBlockContext | undefined): DefinitionBlock {
    return new DefinitionBlock(this.getGlobalBody(ctx?.globalBodyElement()));
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
        'Impossible - FunctionDeclaration and VariableDeclaration cannot both be undefined (enforced by Parser)'
      );
    }
  }

  visitGlobalVariableDeclaration(ctx: GlobalVariableDeclarationContext): VariableDeclaration {
    return this.getVariableDeclaration(ctx, true);
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): FunctionDeclaration {
    return new FunctionDeclaration(
      this.getToken(ctx.functionName().NAME(), 'string'),
      this.getInputVariables(ctx.parameterName()),
      this.getStatements(ctx.statement())
    );
  }

  visitOutputBlock(ctx: OutputBlockContext): OutputBlock {
    return new OutputBlock(this.getStatements(ctx.statement()));
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
        'Impossible - VariableDeclaration, VariableAssignment, CreateCall, and FunctionCall cannot all be undefined (enforced by Parser)'
      );
    }

    return value;
  }

  visitLoopBlock(ctx: LoopBlockContext): LoopBlock {
    return new LoopBlock(this.getToken(ctx.POSITIVE_NUMBER(), 'number'), this.getStatements(ctx.statement()));
  }

  visitVariableAssignment(ctx: VariableAssignmentContext): VariableAssignment {
    return new VariableAssignment(
      this.getToken(ctx.variableName().NAME(), 'string'),
      this.visitExpression(ctx.expression())
    );
  }

  visitLocalVariableDeclaration(ctx: LocalVariableDeclarationContext): VariableDeclaration {
    return this.getVariableDeclaration(ctx, false);
  }

  visitFunctionCall(ctx: FunctionCallContext): FunctionCall {
    return new FunctionCall(this.getToken(ctx.functionName().NAME(), 'string'), this.getExpressions(ctx.expression()));
  }

  visitCreateCall(ctx: CreateCallContext): CreateMarker | CreatePolyline {
    const streetOutputCtx = ctx.streetOutput();
    const markerOutputCtx = ctx.markerOutput();
    if (streetOutputCtx) {
      return this.visitStreetOutput(streetOutputCtx);
    } else if (markerOutputCtx) {
      return this.visitMarkerOutput(markerOutputCtx);
    } else {
      throw new Error('Impossible - MarkerOutput and StreetOutput cannot both be undefined (enforced by Parser)');
    }
  }

  visitMarkerOutput(ctx: MarkerOutputContext): CreateMarker {
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
        'Impossible - Bus Stop, Traffic Light, Stop Sign, and Train Stop cannot all be undefined (enforced by Parser)'
      );
    }

    return new CreateMarker(this.getToken(type, 'string'), this.visitExpression(ctx.expression()));
  }

  visitStreetOutput(ctx: StreetOutputContext): CreatePolyline {
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
      throw new Error('Impossible - Street, Highway, and Bridge cannot all be undefined (enforced by Parser)');
    }

    const exprCtx1 = ctx.expression(0);
    const exprCtx2 = ctx.expression(1);
    return new CreatePolyline(this.getToken(type, 'string'), this.visitExpression(exprCtx1), this.visitExpression(exprCtx2));
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
        'Impossible - Position, Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)'
      );
    }
  }

  visitPosition(ctx: PositionContext): Position {
    const expressions = ctx.operableExpr();
    return new Position(this.visitOperableExpr(expressions[0]), this.visitOperableExpr(expressions[1]));
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
      leftExpression = this.getToken(number, 'number');
    } else if (variableNameCtx) {
      leftExpression = this.getToken(variableNameCtx.NAME(), 'assignedValue');
    } else {
      throw new Error('Impossible - Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)');
    }

    const operationCtx = ctx.operation();
    if (operationCtx) {
      // This is some kind of operation (e.g. a + b)
      return new OpExpression(
        leftExpression,
        this.getToken(operationCtx.OPERATOR(), 'string'),
        this.visitOperableExpr(operationCtx.operableExpr())
      );
    } else {
      return leftExpression;
    }
  }

  visitPositionAccess(ctx: PositionAccessContext): CoordinateAccess {
    return new CoordinateAccess(this.getToken(ctx.NAME(), 'string'), this.getToken(ctx.COORDINATE(), 'string'));
  }

  protected defaultResult(): ASTNode {
    return new Program(new OutputBlock([]));
  }

  private getVariableDeclaration(
    ctx: GlobalVariableDeclarationContext | LocalVariableDeclarationContext,
    isGlobalConstant: boolean
  ): VariableDeclaration {
    return new VariableDeclaration(
      isGlobalConstant,
      this.getToken(ctx.variableName().NAME(), 'string'),
      this.visitExpression(ctx.expression())
    );
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
      terminal.text,
      {
        zeroIndexStart: terminal.symbol.startIndex,
        zeroIndexEnd: terminal.symbol.stopIndex
      },
      targetValueType
    );
  }

  private getInputVariables(parameterNameContexts: ParameterNameContext[]): TokenNode[] {
    const inputVariables = [];
    for (const parameter of parameterNameContexts) {
      inputVariables.push(this.getToken(parameter.NAME(), 'string'));
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
}
