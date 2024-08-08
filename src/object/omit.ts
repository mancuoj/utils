/**
 * Creates a new object with specified keys omitted.
 *
 * This function takes an object and an array of keys, and returns a new object that
 * excludes the properties corresponding to the specified keys.
 *
 * @param obj - The object to omit keys from.
 * @param keys - An array of keys to be omitted from the object.
 * @returns A new object with the specified keys omitted.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * console.log(omit(obj, ['a', 'c']));  //=> { b: 2 }
 * console.log(omit(obj, ['a', 'd']));  //=> { b: 2, c: 3 }
 * ```
 */
export function omit<
  T extends Record<string, any>,
  K extends keyof T,
>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj }

  for (const key of keys) {
    delete result[key]
  }

  return result as Omit<T, K>
}
