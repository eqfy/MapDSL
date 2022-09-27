import { OutputStatement } from './OutputStatement';
import Program from './Program';

export default class OutputBuilder {
  readonly program: Program;

  constructor(program: Program) {
    this.program = program;
  }

  public getAllOutputStatements(): OutputStatement[] {
    return [];
  }

  // Private methods
}
