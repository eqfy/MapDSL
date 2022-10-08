export interface Position {
  x: number;
  y: number;
}

export interface PolylineCreateStatement {
  type: 'Highway' | 'Street' | 'Bridge';
  startPosition: Position;
  endPosition: Position;
}

export interface MarkerCreateStatement {
  type: 'BusStop' | 'TrafficLight' | 'StopSign' | 'TrainStop';
  position: Position;
}

export type CreateStatement = PolylineCreateStatement | MarkerCreateStatement;

// Type checking
export function isPolylineCreateStatement(output: unknown): output is PolylineCreateStatement {
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
