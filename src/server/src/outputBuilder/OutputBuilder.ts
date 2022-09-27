import { OutputStatement, Position } from './OutputStatement';
import Program from './Program';

export default class OutputBuilder {
  readonly program: Program;

  constructor(program: Program) {
    this.program = program;
  }

  public getAllOutputStatements(): OutputStatement[] {
    const testData: OutputStatement = {
      type: 'BusStop',
      position: { x: 10, y: 10 }
    };
    return [testData];
  }
}
