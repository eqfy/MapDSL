import { isNumber, isObject } from '../util/typeChecking';

export interface CreatePosition {
  x: number;
  y: number;
}

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

export type CreateStatement = PolylineCreateStatement | MarkerCreateStatement | PolygonCreateStatement;

// Type checking
export function isCreatePosition(pos: unknown): pos is CreatePosition {
  return (
    isObject(pos) && 'x' in pos && 'y' in pos && isNumber((pos as { x: unknown }).x) && isNumber((pos as { y: unknown }).y)
  );
}
