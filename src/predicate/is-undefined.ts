/**
 * Checks if the given value is undefined, narrowing the type to `undefined`.
 *
 * @param x - The value to test if it is undefined.
 * @returns `true` if the value is undefined, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isUndefined(undefined));  //=> true
 * console.log(isUndefined(null));       //=> false
 * console.log(isUndefined(42));         //=> false
 * ```
 */
export function isUndefined(x: unknown): x is undefined {
  return x === undefined
}
