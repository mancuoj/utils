/**
 * Checks if the given value is null, narrowing the type to `null`.
 *
 * @param x - The value to test if it is null.
 * @returns True if the value is null, false otherwise.
 *
 * @example
 * ```ts
 * console.log(isNull(null));       //=> true
 * console.log(isNull(undefined));  //=> false
 * console.log(isNull(42));         //=> false
 * ```
 */
export function isNull(x: unknown): x is null {
  return x === null
}
