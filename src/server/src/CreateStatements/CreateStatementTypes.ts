export interface CreatePosition {
  x: number;
  y: number;
}

export interface PolylineCreateStatement {
  type: 'Highway' | 'Street' | 'Bridge';
  startPosition: CreatePosition;
  endPosition: CreatePosition;
}

export interface MarkerCreateStatement {
  type: 'BusStop' | 'TrafficLight' | 'StopSign' | 'TrainStop';
  position: CreatePosition;
}

export type CreateStatement = PolylineCreateStatement | MarkerCreateStatement;