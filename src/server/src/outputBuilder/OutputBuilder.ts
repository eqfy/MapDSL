import { CreateStatement } from './CreateStatement';

export default class OutputBuilder {
  private _result: CreateStatement[];

  constructor() {
    this._result = [];
  }

  public createRoad() {
    // TODO
    // this.result.append(road)
  }

  public createMarker() {
    // TODO
    // this.result.append(marker)
  }

  public get result(): CreateStatement[] {
    return this._result;
  }
}
