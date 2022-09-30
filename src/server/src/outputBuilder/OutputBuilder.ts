import { CreateStatement } from './CreateStatement';

export default class OutputBuilder {
  private _result: CreateStatement[];

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
    return this._result;
  }
}
