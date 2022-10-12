import { isNumber, isObject } from '../util/typeChecking';

export interface CreatePosition {
  x: number;
  y: number;
}

export type CreateStatement = PolylineCreateStatement | MarkerCreateStatement;

export interface PolylineCreateStatement {
  type: 'highway' | 'street' | 'bridge';
  startPosition: CreatePosition;
  endPosition: CreatePosition;
}

export interface MarkerCreateStatement {
  type: 'bus stop' | 'traffic light' | 'stop sign' | 'train stop';
  position: CreatePosition;
}

// Type checking
export function isCreatePosition(pos: unknown): pos is CreatePosition {
  return (
    isObject(pos) && 'x' in pos && 'y' in pos && isNumber((pos as { x: unknown }).x) && isNumber((pos as { y: unknown }).y)
  );
}
