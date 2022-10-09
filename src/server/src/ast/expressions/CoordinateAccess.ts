import { Visitor } from "../Visitor";
import TokenNode from "./TokenNode";
import { OperableExpr } from "./OperableExpr";

export default class CoordinateAccess extends OperableExpr {
  readonly variableName: TokenNode; // the variable name
  readonly coordinate: TokenNode; // x or y

  constructor(variableName: TokenNode, coordinate: TokenNode) {
    super();
    this.variableName = variableName;
    this.coordinate = coordinate;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCoordinateAccess(this, t);
  }
}
