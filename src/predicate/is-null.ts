/**
 * Checks if the given value is null.
 *
 * This function tests whether the provided value is strictly equal to `null`.
 * It returns `true` if the value is `null`, and `false` otherwise.
 *
 * This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `null`.
 *
 * @param {unknown} x - The value to test if it is null.
 * @returns {x is null} True if the value is null, false otherwise.
 *
 * @example
 * ```ts
 * const value1 = null;
 * console.log(isNull(value1));  //=> true
 *
 * const value2 = undefined;
 * console.log(isNull(value2));  //=> false
 *
 * const value3 = 42;
 * console.log(isNull(value3));  //=> false
 * ```
 */
export function isNull(x: unknown): x is null {
  return x === null
}
