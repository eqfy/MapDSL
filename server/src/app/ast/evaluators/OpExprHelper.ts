import { Range } from "../../util/Range";
import ErrorBuilder from "../Errors/ErrorBuilder";
import { isBoolean, isNumber } from "../../util/typeChecking";

export interface EvaluatedExpression {
  val: boolean | number,
  range: Range
}

interface EvaluatedNumberExpression extends EvaluatedExpression {
  val: number;
}

interface EvaluatedBooleanExpression extends EvaluatedExpression {
  val: boolean;
}

export interface EvaluatedOperator {
  val: string,
  range: Range
}

export function numOpEvaluator(op: EvaluatedOperator, l: EvaluatedExpression, r: EvaluatedExpression, errorBuilder: ErrorBuilder): EvaluatedExpression | undefined {
  if (!isNumber(l.val)) {
    errorBuilder.buildError("Operand is not a number", { start: l.range.start, end: l.range.end });
    return;
  }
  if (!isNumber(r.val)) {
    errorBuilder.buildError("Operand is not a number", { start: r.range.start, end: r.range.end });
    return;
  }
  const lnum = l as EvaluatedNumberExpression;
  const rnum = r as EvaluatedNumberExpression;
  const range: Range = { start: l.range.start, end: r.range.end };
  switch (op.val) {
    case "+":
      return { val: lnum.val + rnum.val, range };
    case "-":
      return { val: lnum.val - rnum.val, range };
    case "*":
      return { val: lnum.val * rnum.val, range };
    case "/": {
      if (rnum.val === 0) {
        errorBuilder.buildError("Cannot divide by 0", range);
        return;
      }
      return { val: Math.floor(lnum.val / rnum.val), range };
    }
    case ">":
      return { val: lnum.val > rnum.val, range };
    case "<":
      return { val: lnum.val < rnum.val, range };
    case ">=":
      return { val: lnum.val >= rnum.val, range };
    case "<=":
      return { val: lnum.val <= rnum.val, range };
    case "==":
      return { val: lnum.val === rnum.val, range };
    case "!=":
      return { val: lnum.val !== rnum.val, range };
    default:
      errorBuilder.buildError("Invalid operator for numbers", { start: op.range.start, end: op.range.end });
  }
}

export function booleanOpEvaluator(op: EvaluatedOperator, l: EvaluatedExpression, r: EvaluatedExpression, errorBuilder: ErrorBuilder): EvaluatedBooleanExpression | undefined {
  if (!isBoolean(l.val)) {
    errorBuilder.buildError("Operand is not a boolean", { start: l.range.start, end: l.range.end });
    return;
  }
  if (!isBoolean(r.val)) {
    errorBuilder.buildError("Operand is not a boolean", { start: r.range.start, end: r.range.end });
    return;
  }
  const lbool = l as EvaluatedBooleanExpression;
  const rbool = r as EvaluatedBooleanExpression;
  const range: Range = { start: l.range.start, end: r.range.end };
  switch (op.val) {
    case "==":
      return { val: lbool.val === rbool.val, range };
    case "!=":
      return { val: lbool.val !== rbool.val, range };
    case "AND":
      return { val: lbool.val && rbool.val, range };
    case "OR":
      return { val: lbool.val || rbool.val, range };
    default:
      errorBuilder.buildError("Invalid operator for booleans", range);
  }
}