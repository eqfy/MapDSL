import { Visitor } from "./Visitor";

export default abstract class ASTNode {
  abstract accept<T, U>(v: Visitor<T, U>, t: T): U;
}
