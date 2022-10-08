import { MapGeneratorParserVisitor } from './gen/MapGeneratorParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import {
  BodyElementContext,
  CreateCallContext,
  DefinitionBlockContext,
  ExpressionContext,
  FunctionCallContext,
  FunctionDeclarationContext,
  GlobalBodyElementContext,
  GlobalVariableDeclarationContext,
  LeftExpressionValueContext,
  LocalVariableDeclarationContext,
  LoopBlockContext,
  MarkerOutputContext,
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
import VariableAssignment from '../ast/VariableAssignment';
import FunctionDeclaration from '../ast/FunctionDeclaration';
import LoopBlock from '../ast/LoopBlock';
import Expression from '../ast/Expression';
import VariableDeclaration from '../ast/VariableDeclaration';
import FunctionCall from '../ast/FunctionCall';
import CreateMarker from '../ast/CreateMarker';
import CreatePolygon from '../ast/CreatePolygon';
import CoordinateAccess from '../ast/CoordinateAccess';
import TokenNode from '../ast/TokenNode';
import Position from '../ast/Position';

export class ParseToASTVisitor extends AbstractParseTreeVisitor<ASTNode> implements MapGeneratorParserVisitor<ASTNode> {
  visitProgram(ctx: ProgramContext): Program {
    return new Program(this.visitOutputBlock(ctx.outputBlock()), this.visitDefinitionBlock(ctx.definitionBlock()));
  }

  visitDefinitionBlock(ctx: DefinitionBlockContext | undefined): DefinitionBlock {
    return new DefinitionBlock(this.getGlobalBody(ctx?.globalBodyElement()));
  }

  visitBodyElement(
    ctx: BodyElementContext
  ): VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall | LoopBlock {
    const loopBlockCtx = ctx.loopBlock();
    const statementCtx = ctx.statement();
    if (loopBlockCtx) {
      return this.visitLoopBlock(loopBlockCtx);
    } else if (statementCtx) {
      return this.visitStatement(statementCtx);
    } else {
      throw new Error('Impossible - LoopBlock and Statement cannot both be undefined (enforced by Parser)');
    }
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
      this.getToken(ctx.functionName().NAME()),
      this.getInputVariables(ctx.parameterName()),
      this.getLocalBody(ctx.bodyElement())
    );
  }

  visitOutputBlock(ctx: OutputBlockContext): OutputBlock {
    return new OutputBlock(this.getLocalBody(ctx.bodyElement()));
  }

  visitStatement(
    ctx: StatementContext
  ): VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall {
    const localVariableDeclarationCtx = ctx.localVariableDeclaration();
    const variableAssignmentCtx = ctx.variableAssignment();
    const createCallCtx = ctx.createCall();
    const functionCallCtx = ctx.functionCall();

    let value;

    if (localVariableDeclarationCtx) {
      value = this.visitLocalVariableDeclaration(localVariableDeclarationCtx);
    } else if (variableAssignmentCtx) {
      value = this.visitVariableAssignment(variableAssignmentCtx);
    } else if (createCallCtx) {
      value = this.visitCreateCall(createCallCtx);
    } else if (functionCallCtx) {
      value = this.visitFunctionCall(functionCallCtx);
    } else {
      throw new Error(
        'Impossible - VariableDeclaration, VariableAssignment, CreateCall, and FunctionCall cannot all be undefined (enforced by Parser)'
      );
    }

    return value;
  }

  visitLoopBlock(ctx: LoopBlockContext): LoopBlock {
    return new LoopBlock(this.getToken(ctx.POSITIVE_NUMBER()), this.getStatements(ctx.statement()));
  }

  visitVariableAssignment(ctx: VariableAssignmentContext): VariableAssignment {
    return new VariableAssignment(this.getToken(ctx.variableName().NAME()), this.visitExpression(ctx.expression()));
  }

  visitLocalVariableDeclaration(ctx: LocalVariableDeclarationContext): VariableDeclaration {
    return this.getVariableDeclaration(ctx, false);
  }

  visitFunctionCall(ctx: FunctionCallContext): FunctionCall {
    return new FunctionCall(this.getToken(ctx.functionName().NAME()), this.getExpressions(ctx.expression()));
  }

  visitCreateCall(ctx: CreateCallContext): CreateMarker | CreatePolygon {
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
    return new CreateMarker(this.getToken(type), this.visitPosition(ctx.position()));
  }

  visitStreetOutput(ctx: StreetOutputContext): CreatePolygon {
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

    return new CreatePolygon(
      this.getToken(type),
      this.visitPosition(ctx.position()[0]),
      this.visitPosition(ctx.position()[1])
    );
  }

  visitExpression(ctx: ExpressionContext): Expression {
    const leftValueCtx = ctx.leftExpressionValue();
    const operatorCtx = ctx.OPERATOR();
    const expressionCtx = ctx.expression();
    if (!operatorCtx) {
      if (leftValueCtx) {
        return new Expression(this.visitLeftExpressionValue(leftValueCtx));
      } else {
        throw new Error('Impossible - Left Expression Value must be defined if there is no operator (enforced by Parser)');
      }
    } else if (expressionCtx && leftValueCtx) {
      return new Expression(
        this.visitLeftExpressionValue(leftValueCtx),
        this.getToken(operatorCtx),
        this.visitExpression(expressionCtx)
      );
    } else {
      throw new Error(
        'Impossible - Right Expression and Left Expression must be defined if there is an Operator (enforced by Parser)'
      );
    }
  }

  visitLeftExpressionValue(ctx: LeftExpressionValueContext): Position | CoordinateAccess | TokenNode {
    const positionCtx = ctx.position();
    const positionAccessCtx = ctx.positionAccess();
    const positiveNumberCtx = ctx.POSITIVE_NUMBER();
    const negativeNumberCtx = ctx.NEGATIVE_NUMBER();
    const variableNameCtx = ctx.variableName();

    let value;

    if (positionCtx) {
      value = this.visitPosition(positionCtx);
    } else if (positionAccessCtx) {
      value = this.visitPositionAccess(positionAccessCtx);
    } else if (positiveNumberCtx || negativeNumberCtx) {
      const number = positiveNumberCtx ? positiveNumberCtx : (negativeNumberCtx as TerminalNode);
      value = this.getToken(number);
    } else if (variableNameCtx) {
      value = this.getToken(variableNameCtx.NAME());
    } else {
      throw new Error(
        'Impossible - Position, Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)'
      );
    }

    return value;
  }

  visitPosition(ctx: PositionContext): Position {
    const variableNameCtx = ctx.variableName();
    if (variableNameCtx) {
      return new Position(undefined, undefined, this.getToken(variableNameCtx.NAME()));
    } else {
      return new Position(this.visitExpression(ctx.expression()[0]), this.visitExpression(ctx.expression()[1]));
    }
  }

  visitPositionAccess(ctx: PositionAccessContext): CoordinateAccess {
    return new CoordinateAccess(this.getToken(ctx.NAME()), this.getToken(ctx.COORDINATE()));
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
      this.getToken(ctx.variableName().NAME()),
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

  private getLocalBody(
    elements: BodyElementContext[]
  ): (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall | LoopBlock)[] {
    const body: (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall | LoopBlock)[] = [];
    for (const element of elements) {
      body.push(this.visitBodyElement(element));
    }
    return body;
  }

  private getToken(terminal: TerminalNode): TokenNode {
    return new TokenNode(terminal.text, {
      zeroIndexStart: terminal.symbol.startIndex,
      zeroIndexEnd: terminal.symbol.stopIndex
    });
  }

  private getInputVariables(parameterNameContexts: ParameterNameContext[]): TokenNode[] {
    const inputVariables = [];
    for (const parameter of parameterNameContexts) {
      inputVariables.push(this.getToken(parameter.NAME()));
    }
    return inputVariables;
  }

  private getStatements(
    statementContexts: StatementContext[]
  ): (VariableDeclaration | VariableAssignment | CreateMarker | CreatePolygon | FunctionCall)[] {
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
