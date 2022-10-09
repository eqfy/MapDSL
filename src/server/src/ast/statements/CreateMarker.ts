import { Visitor } from "../Visitor";
import TokenNode from "../expressions/TokenNode";
import CreateStatement from "./CreateStatement";
import Expression from "../expressions/Expression";

export default class CreateMarker extends CreateStatement {
  readonly markerType: TokenNode;
  readonly position: Expression;

  constructor(markerType: TokenNode, position: Expression) {
    super();
    this.markerType = markerType;
    this.position = position;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCreateMarker(this, t);
  }
}
