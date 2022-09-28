import { CreateStatement, Position } from './CreateStatement';
import Program from './Program';

export default class CreateStatementBuilder {
  readonly program: Program;

  constructor(program: Program) {
    this.program = program;
  }

  public getAllOutputStatements(): CreateStatement[] {
    const testData: CreateStatement[] = [
      {
        type: 'Highway',
        startPosition: { x: 0, y: 0 },
        endPosition: { x: 100, y: 0 }
      },
      {
        type: 'BusStop',
        position: { x: 10, y: 0 }
      },
      {
        type: 'TrainStop',
        position: { x: 20, y: 0 }
      },
      {
        type: 'BusStop',
        position: { x: 30, y: 0 }
      },
      {
        type: 'TrainStop',
        position: { x: 40, y: 0 }
      },
      {
        type: 'Street',
        startPosition: { x: 0, y: 0 },
        endPosition: { x: 0, y: 100 }
      },
      {
        type: 'TrafficLight',
        position: { x: 0, y: 0 }
      },
      {
        type: 'StopSign',
        position: { x: 50, y: 50 }
      },
      {
        type: 'Bridge',
        startPosition: { x: 0, y: 0 },
        endPosition: { x: 50, y: 50 }
      }
    ];
    return testData;
  }
}
