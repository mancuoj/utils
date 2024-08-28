/**
 * Checks if a given value is null or undefined, narrowing the type to `null` or `undefined`.
 *
 * @param x - The value to test for null or undefined.
 * @returns `true` if the value is null or undefined, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isNil(null));       //=> true
 * console.log(isNil(undefined));  //=> true
 * console.log(isNil(42));         //=> false
 * ```
 */
export function isNil(x: unknown): x is null | undefined {
  return x == null
}
