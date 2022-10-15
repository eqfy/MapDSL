import { Visitor } from '../Visitor';
import Statement from './Statement';
import { Range } from '../../util/Range';
import Expression from '../expressions/Expression';

export interface BranchCtx {
  expression: Expression;
  statements: Statement[];
}

export default class IfElseBlock extends Statement {
  // IF and ELSE IF statements treated the same way
  readonly branchTable: BranchCtx[];
  readonly elseBranch: Statement[];

  constructor(range: Range, branchTable: BranchCtx[], elseBranch: Statement[]) {
    super(range);
    this.branchTable = branchTable;
    this.elseBranch = elseBranch;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitIfElseBlock(this, t);
  }
}
