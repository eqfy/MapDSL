export interface Position {
  x: number;
  y: number;
}

export interface StreetCreateStatement {
  type: 'Highway' | 'Street' | 'Bridge';
  startPosition: Position;
  endPosition: Position;
}

export interface MarkerCreateStatement {
  type: 'BusStop' | 'TrafficLight' | 'StopSign' | 'TrainStop';
  position: Position;
}

export type CreateStatement = StreetCreateStatement | MarkerCreateStatement;

// Type checking
export function isStreetCreateStatement(output: unknown): output is StreetCreateStatement {
  return isCreateStatement(output) && 'startPosition' in output && 'endPosition' in output;
}

export function isMarkerCreateStatement(output: unknown): output is MarkerCreateStatement {
  return isCreateStatement(output) && 'position' in output;
}

function isCreateStatement(statement: unknown): statement is CreateStatement {
  return isObject(statement) && 'type' in statement;
}

function isObject(object: unknown): object is object {
  return typeof object === 'object' && !Array.isArray(object) && object !== null;
}
