/**
 * Checks if the given value is a RegExp.
 *
 * @param x - The value to test if it is a RegExp.
 * @returns `true` if the value is a RegExp, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isRegExp(/abc/));  //=> true
 * console.log(isRegExp('abc'));  //=> false
 * ```
 */
export function isRegExp(x: unknown): x is RegExp {
  return x instanceof RegExp
}
