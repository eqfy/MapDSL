import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import { Range } from '../util/Range';
import TokenNode from './expressions/TokenNode';

export default class CanvasConfiguration extends ASTNode {
  readonly width?: TokenNode;
  readonly height?: TokenNode;

  constructor(range: Range, width?: TokenNode, height?: TokenNode) {
    super(range);
    this.width = width;
	this.height = height;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitCanvasConfiguration(this, t);
  }
}
