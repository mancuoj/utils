/**
 * Checks if the given value is a boolean, narrowing the type to `boolean`.
 *
 * @param x - The value to test if it is a boolean.
 * @returns `true` if the value is a boolean, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isBoolean(true));    //=> true
 * console.log(isBoolean(false));   //=> true
 * console.log(isBoolean(0));       //=> false
 * console.log(isBoolean('true'));  //=> false
 * ```
 */
export function isBoolean(x: unknown): x is boolean {
  return typeof x === 'boolean'
}
