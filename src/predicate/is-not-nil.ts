/**
 * Checks if the given value is not null nor undefined.
 *
 * The main use of this function is to be used with TypeScript as a type predicate.
 *
 * @param x - The value to test if it is not null nor undefined.
 * @returns True if the value is not null nor undefined, false otherwise.
 *
 * @example
 * ```ts
 * const arr = [1, 2, null, 4, undefined]
 * const result = arr.filter(isNotNil)
 *
 * // Here the type of result is narrowed to `number[]`
 * console.log(result);  //=> [1, 2, 4]
 * ```
 */
export function isNotNil<T>(x: T | null | undefined): x is T {
  return x !== null && x !== undefined
}
