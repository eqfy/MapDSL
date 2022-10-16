import { Visitor } from '../Visitor';
import TokenNode from '../expressions/TokenNode';
import CreateStatement from './CreateStatement';
import Expression from '../expressions/Expression';
import { Range } from '../../util/Range';
export default class CreatePolygon extends CreateStatement {
  readonly polygonType: TokenNode;
  readonly positions: Expression[];

  constructor(range: Range, polygonType: TokenNode, positions: Expression[]) {
    super(range);
    this.polygonType = polygonType;
	  this.positions = positions;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCreatePolygon(this, t);
  }
}
