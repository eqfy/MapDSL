export function isNumber(value: unknown): value is number {
  return !isNaN(Number(value));
}

export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}

export function isObject(object: unknown): object is object {
  return typeof object === 'object' && !Array.isArray(object) && object !== null;
}
