import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import CreateStatement from './CreateStatement';
import Expression from '../expressions/Expression';
import { Range } from '../../util/Range';
export default class CreateMarker extends CreateStatement {
  readonly markerType: TokenNode;
  readonly position: Expression;

  constructor(range: Range, markerType: TokenNode, position: Expression) {
    super(range);
    this.markerType = markerType;
    this.position = position;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCreateMarker(this, t);
  }
}
