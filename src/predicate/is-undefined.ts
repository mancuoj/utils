/**
 * Checks if the given value is undefined.
 *
 * This function tests whether the provided value is strictly equal to `undefined`.
 * It returns `true` if the value is `undefined`, and `false` otherwise.
 *
 * This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `undefined`.
 *
 * @param x - The value to test if it is undefined.
 * @returns true if the value is undefined, false otherwise.
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
