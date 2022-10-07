import { CreateStatement } from './CreateStatement';
import { testing } from '../util/constants';

export default class CreateStatementBuilder {
  private readonly _result: CreateStatement[];

  constructor() {
    this._result = [];
  }

  public buildRoad() {
    // TODO
    // this.result.append(road)
  }

  public buildMarker() {
    // TODO
    // this.result.append(marker)
  }

  public get result(): CreateStatement[] {
    const testData: CreateStatement[] = [
      { type: 'Street', startPosition: { x: 128, y: 128 }, endPosition: { x: 128, y: 640 } },
      { type: 'Street', startPosition: { x: 128, y: 128 }, endPosition: { x: 640, y: 128 } },
      { type: 'Street', startPosition: { x: 128, y: 640 }, endPosition: { x: 640, y: 640 } },
      { type: 'Street', startPosition: { x: 640, y: 128 }, endPosition: { x: 640, y: 640 } },

      { type: 'Street', startPosition: { x: 128, y: 512 }, endPosition: { x: 384, y: 512 } },
      { type: 'Street', startPosition: { x: 384, y: 512 }, endPosition: { x: 640, y: 640 } },
      { type: 'Street', startPosition: { x: 384, y: 512 }, endPosition: { x: 640, y: 256 } },

      { type: 'Street', startPosition: { x: 128, y: 384 }, endPosition: { x: 512, y: 384 } },
      { type: 'Street', startPosition: { x: 300, y: 512 }, endPosition: { x: 300, y: 128 } },
      { type: 'StopSign', position: { x: 300, y: 384 } },

      { type: 'Bridge', startPosition: { x: 0, y: 512 }, endPosition: { x: 128, y: 512 } },

      { type: 'Highway', startPosition: { x: 128, y: 128 }, endPosition: { x: 140, y: 80 } },
      { type: 'Highway', startPosition: { x: 640, y: 128 }, endPosition: { x: 680, y: 80 } },
      { type: 'Highway', startPosition: { x: 64, y: 80 }, endPosition: { x: 800, y: 80 } },
      { type: 'TrafficLight', position: { x: 384, y: 512 } },

      { type: 'BusStop', position: { x: 128, y: 512 } },
      { type: 'BusStop', position: { x: 640, y: 256 } },
      { type: 'TrainStop', position: { x: 384, y: 640 } }
    ];
    if (testing) {
      return testData;
    } else {
      return this._result;
    }
  }
}
