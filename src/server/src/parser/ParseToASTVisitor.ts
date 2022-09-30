import {
  ASTNode,
  ASTTokenNode,
  CreateCallNode,
  DefinitionBlockNode,
  ExpressionNode,
  FunctionCallNode,
  FunctionDeclarationNode,
  LoopBlockNode,
  MarkerOutputNode,
  OutputBlockNode,
  PositionNode,
  PositionAccessNode,
  ProgramNode,
  StatementNode,
  StreetOutputNode,
  VariableAssignmentNode,
  VariableDeclarationNode
} from '../ast/AST';
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
import { ASTTokenType } from '../ast/ASTTypes';

export class ParseToASTVisitor extends AbstractParseTreeVisitor<ASTNode> implements MapGeneratorParserVisitor<ASTNode> {
  visitProgram(ctx: ProgramContext): ProgramNode {
    const definitionBlockCtx = ctx.definitionBlock();
    if (definitionBlockCtx) {
      return {
        type: 'Program',
        definitionBlock: this.visitDefinitionBlock(definitionBlockCtx),
        outputBlock: this.visitOutputBlock(ctx.outputBlock()),
        accept(v, t) {
          return v.visitProgramNode(this, t);
        }
      };
    } else {
      return {
        type: 'Program',
        outputBlock: this.visitOutputBlock(ctx.outputBlock()),
        accept(v, t) {
          return v.visitProgramNode(this, t);
        }
      };
    }
  }

  visitDefinitionBlock(ctx: DefinitionBlockContext): DefinitionBlockNode {
    return {
      type: 'DefinitionBlock',
      body: this.getGlobalBody(ctx.globalBodyElement()),
      accept(v, t) {
        return v.visitDefinitionBlockNode(this, t);
      }
    };
  }

  visitBodyElement(ctx: BodyElementContext): LoopBlockNode | StatementNode {
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

  visitGlobalBodyElement(ctx: GlobalBodyElementContext): FunctionDeclarationNode | VariableDeclarationNode {
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

  visitGlobalVariableDeclaration(ctx: GlobalVariableDeclarationContext): VariableDeclarationNode {
    const globalVar = this.getVariableDeclaration(ctx);
    globalVar.isGlobalConstant = true;
    return globalVar;
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): FunctionDeclarationNode {
    return {
      type: 'FunctionDeclaration',
      name: this.getTokenNode('FunctionName', ctx.functionName().NAME()),
      inputVariables: this.getInputVariables(ctx.parameterName()),
      body: this.getLocalBody(ctx.bodyElement()),
      accept(v, t) {
        return v.visitFunctionDeclarationNode(this, t);
      }
    };
  }

  visitOutputBlock(ctx: OutputBlockContext): OutputBlockNode {
    return {
      type: 'OutputBlock',
      body: this.getLocalBody(ctx.bodyElement()),
      accept(v, t) {
        return v.visitOutputBlockNode(this, t);
      }
    };
  }

  visitStatement(ctx: StatementContext): StatementNode {
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

  visitLoopBlock(ctx: LoopBlockContext): LoopBlockNode {
    return {
      type: 'LoopBlock',
      loopNumber: this.getTokenNode('LoopNumber', ctx.POSITIVE_NUMBER()),
      body: this.getStatements(ctx.statement()),
      accept(v, t) {
        return v.visitLoopBlockNode(this, t);
      }
    };
  }

  visitVariableAssignment(ctx: VariableAssignmentContext): VariableAssignmentNode {
    return {
      type: 'VariableAssignment',
      name: this.getTokenNode('VariableName', ctx.variableName().NAME()),
      value: this.visitExpression(ctx.expression()),
      accept(v, t) {
        return v.visitVariableAssignmentNode(this, t);
      }
    };
  }

  visitLocalVariableDeclaration(ctx: LocalVariableDeclarationContext): VariableDeclarationNode {
    const globalVar = this.getVariableDeclaration(ctx);
    globalVar.isGlobalConstant = false;
    return globalVar;
  }

  visitFunctionCall(ctx: FunctionCallContext): FunctionCallNode {
    return {
      type: 'FunctionCall',
      name: this.getTokenNode('FunctionName', ctx.functionName().NAME()),
      inputValues: this.getExpressions(ctx.expression()),
      accept(v, t) {
        return v.visitFunctionCallNode(this, t);
      }
    };
  }

  visitCreateCall(ctx: CreateCallContext): CreateCallNode {
    const streetOutputCtx = ctx.streetOutput();
    const markerOutputCtx = ctx.markerOutput();

    let value;

    if (streetOutputCtx) {
      value = this.visitStreetOutput(streetOutputCtx);
    } else if (markerOutputCtx) {
      value = this.visitMarkerOutput(markerOutputCtx);
    } else {
      throw new Error('Impossible - MarkerOutput and StreetOutput cannot both be undefined (enforced by Parser)');
    }

    return {
      type: 'CreateCall',
      value: value,
      accept(v, t) {
        return v.visitCreateCallNode(this, t);
      }
    };
  }

  visitMarkerOutput(ctx: MarkerOutputContext): MarkerOutputNode {
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

    return {
      type: 'MarkerOutput',
      markerType: this.getTokenNode('MarkerType', type),
      position: this.visitPosition(ctx.position()),
      accept(v, t) {
        return v.visitMarkerOutputNode(this, t);
      }
    };
  }

  visitStreetOutput(ctx: StreetOutputContext): StreetOutputNode {
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

    return {
      type: 'StreetOutput',
      streetType: this.getTokenNode('StreetType', type),
      startPosition: this.visitPosition(ctx.position()[0]),
      endPosition: this.visitPosition(ctx.position()[1]),
      accept(v, t) {
        return v.visitStreetOutputNode(this, t);
      }
    };
  }

  visitExpression(ctx: ExpressionContext): ExpressionNode {
    const leftValueCtx = ctx.leftExpressionValue();
    const operatorCtx = ctx.OPERATOR();
    const expressionCtx = ctx.expression();
    if (!operatorCtx) {
      if (leftValueCtx) {
        return this.visitLeftExpressionValue(leftValueCtx);
      } else {
        throw new Error('Impossible - Left Expression Value must be defined if there is no operator (enforced by Parser)');
      }
    } else if (expressionCtx && leftValueCtx) {
      return {
        type: 'Expression',
        leftValue: this.visitLeftExpressionValue(leftValueCtx),
        operator: this.getTokenNode('Operator', operatorCtx),
        rightValue: this.visitExpression(expressionCtx),
        accept(v, t) {
          return v.visitExpressionNode(this, t);
        }
      };
    } else {
      throw new Error(
        'Impossible - Right Expression and Left Expression must be defined if there is an Operator (enforced by Parser)'
      );
    }
  }

  visitLeftExpressionValue(ctx: LeftExpressionValueContext): PositionNode | PositionAccessNode | ASTTokenNode {
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
      value = this.getTokenNode('Number', number);
    } else if (variableNameCtx) {
      value = this.getTokenNode('VariableName', variableNameCtx.NAME());
    } else {
      throw new Error(
        'Impossible - Position, Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)'
      );
    }

    return value;
  }

  visitPosition(ctx: PositionContext): PositionNode {
    const variableNameCtx = ctx.variableName();
    if (variableNameCtx) {
      return {
        type: 'Position',
        variableName: this.getTokenNode('VariableName', variableNameCtx.NAME()),
        accept(v, t) {
          return v.visitPositionNode(this, t);
        }
      };
    } else {
      return {
        type: 'Position',
        xCoordinate: this.visitExpression(ctx.expression()[0]),
        yCoordinate: this.visitExpression(ctx.expression()[1]),
        accept(v, t) {
          return v.visitPositionNode(this, t);
        }
      };
    }
  }

  protected defaultResult(): ASTNode {
    return {
      type: 'Program',
      accept(v, t) {
        return v.visitASTNode(this, t);
      }
    };
  }

  private getVariableDeclaration(
    ctx: GlobalVariableDeclarationContext | LocalVariableDeclarationContext
  ): VariableDeclarationNode {
    return {
      type: 'VariableDeclaration',
      isGlobalConstant: false,
      name: this.getTokenNode('VariableName', ctx.variableName().NAME()),
      value: this.visitExpression(ctx.expression()),
      accept(v, t) {
        return v.visitVariableDeclarationNode(this, t);
      }
    };
  }

  private getGlobalBody(elements: GlobalBodyElementContext[]): (FunctionDeclarationNode | VariableDeclarationNode)[] {
    const body: (FunctionDeclarationNode | VariableDeclarationNode)[] = [];
    for (const element of elements) {
      body.push(this.visitGlobalBodyElement(element));
    }
    return body;
  }

  private getLocalBody(elements: BodyElementContext[]): (StatementNode | LoopBlockNode)[] {
    const body: (StatementNode | LoopBlockNode)[] = [];
    for (const element of elements) {
      body.push(this.visitBodyElement(element));
    }
    return body;
  }

  private getTokenNode(type: ASTTokenType, terminalNode: TerminalNode): ASTTokenNode {
    // not using type because it was (seemingly) useless information, but kept it here in case
    return {
      type: type,
      tokenValue: terminalNode.text,
      range: {
        zeroIndexStart: terminalNode.symbol.startIndex,
        zeroIndexEnd: terminalNode.symbol.stopIndex
      },
      accept(v, t) {
        return v.visitASTTokenNode(this, t);
      }
    };
  }

  private getInputVariables(parameterNameContexts: ParameterNameContext[]): ASTTokenNode[] {
    const inputVariables = [];
    for (const parameter of parameterNameContexts) {
      inputVariables.push(this.getTokenNode('ParameterName', parameter.NAME()));
    }
    return inputVariables;
  }

  private getStatements(statementContexts: StatementContext[]): StatementNode[] {
    const statements = [];
    for (const statement of statementContexts) {
      statements.push(this.visitStatement(statement));
    }
    return statements;
  }

  private getExpressions(expressionContexts: ExpressionContext[]): ExpressionNode[] {
    const expressions = [];
    for (const expression of expressionContexts) {
      expressions.push(this.visitExpression(expression));
    }
    return expressions;
  }

  visitPositionAccess(ctx: PositionAccessContext): PositionAccessNode {
    return {
      type: 'PositionAccess',
      variableName: this.getTokenNode('VariableName', ctx.NAME()),
      coordinate: this.getTokenNode('Coordinate', ctx.COORDINATE()),
      accept(v, t) {
        return v.visitPositionAccessNode(this, t);
      }
    };
  }
}
