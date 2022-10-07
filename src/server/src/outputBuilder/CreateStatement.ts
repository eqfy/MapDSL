export interface Position {
  x: number;
  y: number;
}

interface StreetCreateStatement {
  type: 'Highway' | 'Street' | 'Bridge';
  startPosition: Position;
  endPosition: Position;
}

interface MarkerCreateStatement {
  type: 'BusStop' | 'TrafficLight' | 'StopSign' | 'TrainStop';
  position: Position;
}

export type CreateStatement = StreetCreateStatement | MarkerCreateStatement;
