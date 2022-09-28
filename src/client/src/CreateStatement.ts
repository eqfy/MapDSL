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
