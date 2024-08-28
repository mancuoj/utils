/**
 * Checks if the given value is a string, narrowing the type to `string`.
 *
 * @param x - The value to test if it is a string.
 * @returns `true` if the value is a string, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isString('hello'));  //=> true
 * console.log(isString(42));       //=> false
 * console.log(isString(true));     //=> false
 * ```
 */
export function isString(x: unknown): x is string {
  return typeof x === 'string'
}
