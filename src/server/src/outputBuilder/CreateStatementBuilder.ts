import { CreateStatement } from './CreateStatement';
import Program from './Program';

export default class CreateStatementBuilder {
  readonly program: Program;

  constructor(program: Program) {
    this.program = program;
  }

  public getAllOutputStatements(): CreateStatement[] {
    const testData: CreateStatement = {
      type: 'BusStop',
      position: { x: 10, y: 10 }
    };
    return [testData];
  }
}
