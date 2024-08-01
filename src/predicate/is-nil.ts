/**
 * Checks if a given value is null or undefined.
 *
 * This function tests whether the provided value is either `null` or `undefined`.
 * It returns `true` if the value is `null` or `undefined`, and `false` otherwise.
 *
 * This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `null` or `undefined`.
 *
 * @param {unknown} x - The value to test for null or undefined.
 * @returns {boolean} `true` if the value is null or undefined, `false` otherwise.
 *
 * @example
 * ```ts
 * const value1 = null;
 * console.log(isNil(value1));  //=> true
 *
 * const value2 = undefined;
 * console.log(isNil(value2));  //=> true
 *
 * const value3 = 42;
 * console.log(isNil(value3));  //=> false
 * ```
 */
export function isNil(x: unknown): x is null | undefined {
  return x == null
}
