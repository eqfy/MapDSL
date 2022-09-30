import OutputBuilder from '../outputBuilder/OutputBuilder';

export interface OutputVisitorContext {
  outputBuilder: OutputBuilder;
  constantTable: Map<string, string>; // TODO Fix type
  variableTable: Map<string, string>;
  functionTable: Map<string, string>;
}

export function getDefaultOutputVisitorContext(outputBuilder: OutputBuilder): OutputVisitorContext {
  return {
    outputBuilder,
    constantTable: new Map<string, string>(),
    variableTable: new Map<string, string>(),
    functionTable: new Map<string, string>()
  };
}
