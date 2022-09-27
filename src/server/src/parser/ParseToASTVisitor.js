"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseToASTVisitor = void 0;
const tree_1 = require("antlr4ts/tree");
class ParseToASTVisitor extends tree_1.AbstractParseTreeVisitor {
    visitProgram(ctx) {
        const definitionBlockCtx = ctx.definitionBlock();
        if (definitionBlockCtx) {
            return {
                type: 'Program',
                definitionBlock: this.visitDefinitionBlock(definitionBlockCtx),
                outputBlock: this.visitOutputBlock(ctx.outputBlock())
            };
        }
        else {
            return {
                type: 'Program',
                outputBlock: this.visitOutputBlock(ctx.outputBlock())
            };
        }
    }
    visitDefinitionBlock(ctx) {
        return {
            type: 'DefinitionBlock',
            body: this.getGlobalBody(ctx.globalBodyElement())
        };
    }
    visitBodyElement(ctx) {
        const loopBlockCtx = ctx.loopBlock();
        const statementCtx = ctx.statement();
        if (loopBlockCtx) {
            return this.visitLoopBlock(loopBlockCtx);
        }
        else if (statementCtx) {
            return this.visitStatement(statementCtx);
        }
        else {
            throw new Error('Impossible - LoopBlock and Statement cannot both be undefined (enforced by Parser)');
        }
    }
    visitGlobalBodyElement(ctx) {
        const functionDeclarationCtx = ctx.functionDeclaration();
        const variableDeclarationCtx = ctx.globalVariableDeclaration();
        if (functionDeclarationCtx) {
            return this.visitFunctionDeclaration(functionDeclarationCtx);
        }
        else if (variableDeclarationCtx) {
            return this.visitGlobalVariableDeclaration(variableDeclarationCtx);
        }
        else {
            throw new Error('Impossible - FunctionDeclaration and VariableDeclaration cannot both be undefined (enforced by Parser)');
        }
    }
    visitGlobalVariableDeclaration(ctx) {
        const globalVar = this.getVariableDeclaration(ctx);
        globalVar.isGlobalConstant = true;
        return globalVar;
    }
    visitFunctionDeclaration(ctx) {
        return {
            type: 'FunctionDeclaration',
            name: this.getTokenNode('FunctionName', ctx.functionName().NAME()),
            inputVariables: this.getInputVariables(ctx.parameterName()),
            body: this.getLocalBody(ctx.bodyElement())
        };
    }
    visitOutputBlock(ctx) {
        return {
            type: 'OutputBlock',
            body: this.getLocalBody(ctx.bodyElement())
        };
    }
    visitStatement(ctx) {
        const localVariableDeclarationCtx = ctx.localVariableDeclaration();
        const variableAssignmentCtx = ctx.variableAssignment();
        const createCallCtx = ctx.createCall();
        const functionCallCtx = ctx.functionCall();
        let value;
        if (localVariableDeclarationCtx) {
            value = this.visitLocalVariableDeclaration(localVariableDeclarationCtx);
        }
        else if (variableAssignmentCtx) {
            value = this.visitVariableAssignment(variableAssignmentCtx);
        }
        else if (createCallCtx) {
            value = this.visitCreateCall(createCallCtx);
        }
        else if (functionCallCtx) {
            value = this.visitFunctionCall(functionCallCtx);
        }
        else {
            throw new Error('Impossible - VariableDeclaration, VariableAssignment, CreateCall, and FunctionCall cannot all be undefined (enforced by Parser)');
        }
        return value;
    }
    visitLoopBlock(ctx) {
        return {
            type: 'LoopBlock',
            loopNumber: this.getTokenNode('LoopNumber', ctx.POSITIVE_NUMBER()),
            body: this.getStatements(ctx.statement())
        };
    }
    visitVariableAssignment(ctx) {
        return {
            type: 'VariableAssignment',
            name: this.getTokenNode('VariableName', ctx.variableName().NAME()),
            value: this.visitExpression(ctx.expression())
        };
    }
    visitLocalVariableDeclaration(ctx) {
        const globalVar = this.getVariableDeclaration(ctx);
        globalVar.isGlobalConstant = false;
        return globalVar;
    }
    visitFunctionCall(ctx) {
        return {
            type: 'FunctionCall',
            name: this.getTokenNode('FunctionName', ctx.functionName().NAME()),
            inputValues: this.getExpressions(ctx.expression())
        };
    }
    visitCreateCall(ctx) {
        const streetOutputCtx = ctx.streetOutput();
        const markerOutputCtx = ctx.markerOutput();
        let value;
        if (streetOutputCtx) {
            value = this.visitStreetOutput(streetOutputCtx);
        }
        else if (markerOutputCtx) {
            value = this.visitMarkerOutput(markerOutputCtx);
        }
        else {
            throw new Error('Impossible - MarkerOutput and StreetOutput cannot both be undefined (enforced by Parser)');
        }
        return {
            type: 'CreateCall',
            value: value
        };
    }
    visitMarkerOutput(ctx) {
        const busStopCtx = ctx.BUS_STOP();
        const trafficLightCtx = ctx.TRAFFIC_LIGHT();
        const stopSignCtx = ctx.STOP_SIGN();
        const trainStopCtx = ctx.TRAIN_STOP();
        let type;
        if (busStopCtx) {
            type = busStopCtx;
        }
        else if (trafficLightCtx) {
            type = trafficLightCtx;
        }
        else if (stopSignCtx) {
            type = stopSignCtx;
        }
        else if (trainStopCtx) {
            type = trainStopCtx;
        }
        else {
            throw new Error('Impossible - Bus Stop, Traffic Light, Stop Sign, and Train Stop cannot all be undefined (enforced by Parser)');
        }
        return {
            type: 'MarkerOutput',
            markerType: this.getTokenNode('MarkerType', type),
            position: this.visitPosition(ctx.position())
        };
    }
    visitStreetOutput(ctx) {
        const streetCtx = ctx.STREET();
        const highwayCtx = ctx.HIGHWAY();
        const bridgeCtx = ctx.BRIDGE();
        let type;
        if (streetCtx) {
            type = streetCtx;
        }
        else if (highwayCtx) {
            type = highwayCtx;
        }
        else if (bridgeCtx) {
            type = bridgeCtx;
        }
        else {
            throw new Error('Impossible - Street, Highway, and Bridge cannot all be undefined (enforced by Parser)');
        }
        return {
            type: 'StreetOutput',
            streetType: this.getTokenNode('StreetType', type),
            startPosition: this.visitPosition(ctx.position()[0]),
            endPosition: this.visitPosition(ctx.position()[1])
        };
    }
    visitExpression(ctx) {
        const leftValueCtx = ctx.leftExpressionValue();
        const operatorCtx = ctx.OPERATOR();
        const expressionCtx = ctx.expression();
        if (!operatorCtx) {
            if (leftValueCtx) {
                return this.visitLeftExpressionValue(leftValueCtx);
            }
            else {
                throw new Error('Impossible - Left Expression Value must be defined if there is no operator (enforced by Parser)');
            }
        }
        else if (expressionCtx && leftValueCtx) {
            return {
                type: 'Expression',
                leftValue: this.visitLeftExpressionValue(leftValueCtx),
                operator: this.getTokenNode('Operator', operatorCtx),
                rightValue: this.visitExpression(expressionCtx)
            };
        }
        else {
            throw new Error('Impossible - Right Expression and Left Expression must be defined if there is an Operator (enforced by Parser)');
        }
    }
    visitLeftExpressionValue(ctx) {
        const positionCtx = ctx.position();
        const positionAccessCtx = ctx.positionAccess();
        const positiveNumberCtx = ctx.POSITIVE_NUMBER();
        const negativeNumberCtx = ctx.NEGATIVE_NUMBER();
        const variableNameCtx = ctx.variableName();
        let value;
        if (positionCtx) {
            value = this.visitPosition(positionCtx);
        }
        else if (positionAccessCtx) {
            value = this.visitPositionAccess(positionAccessCtx);
        }
        else if (positiveNumberCtx || negativeNumberCtx) {
            const number = positiveNumberCtx ? positiveNumberCtx : negativeNumberCtx;
            value = this.getTokenNode('Number', number);
        }
        else if (variableNameCtx) {
            value = this.getTokenNode('VariableName', variableNameCtx.NAME());
        }
        else {
            throw new Error('Impossible - Position, Number, PositionAccess, and VariableName cannot all be undefined (enforced by Parser)');
        }
        return value;
    }
    visitPosition(ctx) {
        const variableNameCtx = ctx.variableName();
        if (variableNameCtx) {
            return {
                type: 'Position',
                variableName: this.getTokenNode('VariableName', variableNameCtx.NAME())
            };
        }
        else {
            return {
                type: 'Position',
                xCoordinate: this.visitExpression(ctx.expression()[0]),
                yCoordinate: this.visitExpression(ctx.expression()[1])
            };
        }
    }
    defaultResult() {
        return { type: 'Program' };
    }
    getVariableDeclaration(ctx) {
        return {
            type: 'VariableDeclaration',
            isGlobalConstant: false,
            name: this.getTokenNode('VariableName', ctx.variableName().NAME()),
            value: this.visitExpression(ctx.expression())
        };
    }
    getGlobalBody(elements) {
        const body = [];
        for (const element of elements) {
            body.push(this.visitGlobalBodyElement(element));
        }
        return body;
    }
    getLocalBody(elements) {
        const body = [];
        for (const element of elements) {
            body.push(this.visitBodyElement(element));
        }
        return body;
    }
    getTokenNode(type, terminalNode) {
        // not using type because it was (seemingly) useless information, but kept it here in case
        return {
            type: type,
            tokenValue: terminalNode.text,
            range: {
                zeroIndexStart: terminalNode.symbol.startIndex,
                zeroIndexEnd: terminalNode.symbol.stopIndex
            }
        };
    }
    getInputVariables(parameterNameContexts) {
        const inputVariables = [];
        for (const parameter of parameterNameContexts) {
            inputVariables.push(this.getTokenNode('ParameterName', parameter.NAME()));
        }
        return inputVariables;
    }
    getStatements(statementContexts) {
        const statements = [];
        for (const statement of statementContexts) {
            statements.push(this.visitStatement(statement));
        }
        return statements;
    }
    getExpressions(expressionContexts) {
        const expressions = [];
        for (const expression of expressionContexts) {
            expressions.push(this.visitExpression(expression));
        }
        return expressions;
    }
    visitPositionAccess(ctx) {
        return {
            type: 'PositionAccess',
            variableName: this.getTokenNode('VariableName', ctx.NAME()),
            coordinate: this.getTokenNode('Coordinate', ctx.COORDINATE())
        };
    }
}
exports.ParseToASTVisitor = ParseToASTVisitor;
//# sourceMappingURL=ParseToASTVisitor.js.map