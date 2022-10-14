import { Visitor } from './Visitor';
import { Range } from '../util/Range';

export default abstract class ASTNode {
  range: Range;
  abstract accept<T, U>(v: Visitor<T, U>, t: T): U;

  constructor(range: Range) { this.range = range; }
}
