import { OutputStatement } from '../outputBuilder/OutputStatement';

export default class MapBuilder {
  private readonly outputStatements: OutputStatement[];

  constructor(outputStatements: OutputStatement[]) {
    this.outputStatements = outputStatements;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public render(): HTMLElement {
    console.log(this.outputStatements);
  }

  // Private methods
}
