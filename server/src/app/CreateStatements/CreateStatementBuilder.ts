import { CreateStatement, MarkerCreateStatement, PolygonCreateStatement, PolylineCreateStatement } from './CreateStatementTypes';
import { testing } from '../util/constants';

export default class CreateStatementBuilder {
  private _createStatements: CreateStatement[] = [];

  get createStatements(): CreateStatement[] {
    const testData: CreateStatement[] = [
      { type: 'street', startPosition: { x: 128, y: 128 }, endPosition: { x: 128, y: 640 } },
      { type: 'street', startPosition: { x: 128, y: 128 }, endPosition: { x: 640, y: 128 } },
      { type: 'street', startPosition: { x: 128, y: 640 }, endPosition: { x: 640, y: 640 } },
      { type: 'street', startPosition: { x: 640, y: 128 }, endPosition: { x: 640, y: 640 } },

      { type: 'street', startPosition: { x: 128, y: 512 }, endPosition: { x: 384, y: 512 } },
      { type: 'street', startPosition: { x: 384, y: 512 }, endPosition: { x: 640, y: 640 } },
      { type: 'street', startPosition: { x: 384, y: 512 }, endPosition: { x: 640, y: 256 } },

      { type: 'street', startPosition: { x: 128, y: 384 }, endPosition: { x: 512, y: 384 } },
      { type: 'street', startPosition: { x: 300, y: 512 }, endPosition: { x: 300, y: 128 } },
      { type: 'stop sign', position: { x: 300, y: 384 } },

      { type: 'bridge', startPosition: { x: 0, y: 512 }, endPosition: { x: 128, y: 512 } },

      { type: 'highway', startPosition: { x: 128, y: 128 }, endPosition: { x: 140, y: 80 } },
      { type: 'highway', startPosition: { x: 640, y: 128 }, endPosition: { x: 680, y: 80 } },
      { type: 'highway', startPosition: { x: 64, y: 80 }, endPosition: { x: 800, y: 80 } },
      { type: 'traffic light', position: { x: 384, y: 512 } },

      { type: 'bus stop', position: { x: 128, y: 512 } },
      { type: 'bus stop', position: { x: 640, y: 256 } },
      { type: 'train stop', position: { x: 384, y: 640 } }
    ];
    if (testing) {
      return testData;
    } else {
      return this._createStatements;
    }
  }

  set createStatements(value: CreateStatement[]) {
    this._createStatements = value;
  }

  buildPolyline(polylineCreateStatement: PolylineCreateStatement): void {
    this._createStatements.push(polylineCreateStatement);
  }

  buildPolygon(polygonCreateStatement: PolygonCreateStatement): void {
    this._createStatements.push(polygonCreateStatement);
  }

  buildMarker(markerCreateStatement: MarkerCreateStatement): void {
    this._createStatements.push(markerCreateStatement);
  }
}
