import CreateStatementBuilder from '../outputBuilder/CreateStatementBuilder';

export interface OutputVisitorContext {
  outputBuilder: CreateStatementBuilder;
  constantTable: Map<string, string>; // TODO Fix type
  variableTable: Map<string, string>;
  functionTable: Map<string, string>;
}

export function getDefaultOutputVisitorContext(outputBuilder: CreateStatementBuilder): OutputVisitorContext {
  return {
    outputBuilder,
    constantTable: new Map<string, string>(),
    variableTable: new Map<string, string>(),
    functionTable: new Map<string, string>()
  };
}
