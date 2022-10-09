import CreateStatement from "../ast/statements/CreateStatement";

export default class CreateStatementBuilder {
  private _createStatements: CreateStatement[] = [];


  get createStatements(): CreateStatement[] {
    return this._createStatements;
  }

  set createStatements(value: CreateStatement[]) {
    this._createStatements = value;
  }

  buildRoad(): void {
    // TODO convert _createStatements into PolylineCreateStatement and MarkerCreateStatement
    return undefined;
  }

  buildMarker(): void {
    return undefined;
  }
}