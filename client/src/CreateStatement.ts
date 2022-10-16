import { isObject } from './util/typeChecking';

export interface CreatePosition {
  x: number;
  y: number;
}

export type CreateStatement = PolylineCreateStatement | MarkerCreateStatement | PolygonCreateStatement;

export interface PolylineCreateStatement {
  type: 'highway' | 'street' | 'bridge';
  startPosition: CreatePosition;
  endPosition: CreatePosition;
}

export interface MarkerCreateStatement {
  type: 'bus stop' | 'traffic light' | 'stop sign' | 'train stop';
  position: CreatePosition;
}

export interface PolygonCreateStatement {
  type: 'water' | 'building';
  positions: [CreatePosition, CreatePosition, CreatePosition, CreatePosition];
}

// Type checking
export function isPolylineCreateStatement(output: unknown): output is PolylineCreateStatement {
  return isCreateStatement(output) && 'startPosition' in output && 'endPosition' in output;
}

export function isMarkerCreateStatement(output: unknown): output is MarkerCreateStatement {
  return isCreateStatement(output) && 'position' in output;
}

export function isPolygonCreateStatement(output: unknown): output is PolygonCreateStatement {
  return isCreateStatement(output) && 'positions' in output;
}

function isCreateStatement(statement: unknown): statement is CreateStatement {
  return isObject(statement) && 'type' in statement;
}
