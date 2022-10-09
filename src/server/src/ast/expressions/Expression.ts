import Statement from '../statements/Statement';

export default abstract class Expression extends Statement {
  // all functionality is in the subclasses!
  // accept<T, U>(v: Visitor<T, U>, t: T): U {
  //   return v.visitExpression(this, t);
  // }
}