import { SemanticTokenModifiers, SemanticTokenTypes } from "vscode-languageserver";
import { Range } from '../../app/util/Range';
export const availableTokenTypes = [
  SemanticTokenTypes.namespace,
  SemanticTokenTypes.type,
  SemanticTokenTypes.class,
  SemanticTokenTypes.enum,
  SemanticTokenTypes.interface,
  SemanticTokenTypes.struct,
  SemanticTokenTypes.typeParameter,
  SemanticTokenTypes.parameter,
  SemanticTokenTypes.variable,
  SemanticTokenTypes.property,
  SemanticTokenTypes.enumMember,
  SemanticTokenTypes.event,
  SemanticTokenTypes.function,
  SemanticTokenTypes.method,
  SemanticTokenTypes.macro,
  SemanticTokenTypes.keyword,
  SemanticTokenTypes.modifier,
  SemanticTokenTypes.comment,
  SemanticTokenTypes.string,
  SemanticTokenTypes.number,
  SemanticTokenTypes.regexp,
  SemanticTokenTypes.operator
];
const tokenTypesMap = new Map(availableTokenTypes.map((value, index) => [value, index]));

export const availableTokenModifiers = [
  SemanticTokenModifiers.declaration,
  SemanticTokenModifiers.definition,
  SemanticTokenModifiers.readonly,
  SemanticTokenModifiers.static,
  SemanticTokenModifiers.deprecated,
  SemanticTokenModifiers.abstract,
  SemanticTokenModifiers.async,
  SemanticTokenModifiers.modification,
  SemanticTokenModifiers.documentation,
  SemanticTokenModifiers.defaultLibrary
];
const tokenModifiersMap = new Map(availableTokenModifiers.map((value, index) => [value, index]));

export function encodeTokenType(tokenType: SemanticTokenTypes) {
  const typeIndex = tokenTypesMap.get(tokenType);
  if (typeIndex === undefined) {
    throw new Error(`The token type isnt available`);
  }
  return typeIndex;
}

export function encodeTokenModifiers(tokenModifiers: SemanticTokenModifiers[]): number {
  let encodedMods = 0;
  for (const mod of tokenModifiers) {
    const modIndex = tokenModifiersMap.get(mod);
    if (modIndex === undefined) {
      throw new Error(`The modifier isnt unavailable`);
    }
    encodedMods |= (1 << modIndex) >>> 0;
  }
  return encodedMods;
}

export interface SemanticTokenInfo {
  tokenType: SemanticTokenTypes;
  tokenModifiers: SemanticTokenModifiers[];
  range: Range
}
