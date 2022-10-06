export interface Position {
  x: number;
  y: number;
}

export interface StreetOutput {
  type: 'Highway' | 'Street' | 'Bridge';
  startPosition: Position;
  endPosition: Position;
}

export interface MarkerOutput {
  type: 'BusStop' | 'TrafficLight' | 'StopSign' | 'TrainStop';
  position: Position;
}

export type CreateStatement = StreetOutput | MarkerOutput;

// Type checking
export function isStreetOutput(output: unknown): output is StreetOutput {
  return isCreateStatement(output) && 'startPosition' in output && 'endPosition' in output;
}
  
export function isMarkerOutput(output: unknown): output is MarkerOutput {
  return isCreateStatement(output) && 'position' in output;
}
  
function isCreateStatement(statement: unknown): statement is CreateStatement {
  return isObject(statement) && 'type' in statement;
}
  
function isObject(object: unknown): object is object {
  return typeof object === 'object' && !Array.isArray(object) && object !== null;
}