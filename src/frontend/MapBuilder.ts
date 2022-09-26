import { OutputStatement } from '../outputBuilder/OutputStatement';

export default class MapBuilder {
  private readonly outputStatements: OutputStatement[];

  constructor(outputStatements: OutputStatement[]) {
    this.outputStatements = outputStatements;
  }

  public render(): void {
    console.log(this.outputStatements);
  }

  // Private methods
}
