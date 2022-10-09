import { CreateStatement, MarkerCreateStatement, PolylineCreateStatement } from './CreateStatementTypes';

export default class CreateStatementBuilder {
  private _createStatements: CreateStatement[] = [];

  get createStatements(): CreateStatement[] {
    return this._createStatements;
  }

  set createStatements(value: CreateStatement[]) {
    this._createStatements = value;
  }

  buildPolyline(polylineCreateStatement: PolylineCreateStatement): void {
    this._createStatements.push(polylineCreateStatement);
  }

  buildMarker(markerCreateStatement: MarkerCreateStatement): void {
    this._createStatements.push(markerCreateStatement);
  }
}
