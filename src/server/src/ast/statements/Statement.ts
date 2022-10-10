import ASTNode from '../ASTNode';

export default abstract class Statement extends ASTNode {
  // A statement is a command that does something and does not return a value
  // all functionality is in the subclasses!
}
