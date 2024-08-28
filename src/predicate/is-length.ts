/**
 * Checks if the given value is a valid length.
 *
 * A valid length is type `number`, is a non-negative integer, and is less than or
 * equal to JavaScript's maximum safe integer, aka `Number.MAX_SAFE_INTEGER`.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a valid length, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isLength(10));                           //=> true
 * console.log(isLength(-1));                           //=> false
 * console.log(isLength(10.5));                         //=> false
 * console.log(isLength(Number.MAX_SAFE_INTEGER));      //=> true
 * console.log(isLength(Number.MAX_SAFE_INTEGER + 1));  //=> false
 * ```
 */
export function isLength(x: unknown): x is number {
  return Number.isSafeInteger(x) && (x as number) >= 0
}
