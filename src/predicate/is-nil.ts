/**
 * Checks if a given value is null or undefined.
 *
 * This function tests whether the provided value is either `null` or `undefined`.
 * It returns `true` if the value is `null` or `undefined`, and `false` otherwise.
 *
 * This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `null` or `undefined`.
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
