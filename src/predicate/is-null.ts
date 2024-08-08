/**
 * Checks if the given value is null.
 *
 * This function tests whether the provided value is strictly equal to `null`.
 * It returns `true` if the value is `null`, and `false` otherwise.
 *
 * This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `null`.
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
