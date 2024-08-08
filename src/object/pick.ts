/**
 * Creates a new object composed of the picked object properties.
 *
 * This function takes an object and an array of keys, and returns a new object that
 * includes only the properties corresponding to the specified keys.
 *
 * @param obj - The object to pick keys from.
 * @param keys - An array of keys to be picked from the object.
 * @returns A new object with the specified keys picked.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * console.log(pick(obj, ['a', 'c']));  //=> { a: 1, c: 3 }
 * console.log(pick(obj, ['a', 'd']));  //=> { a: 1 }
 * ```
 */
export function pick<
  T extends Record<string, any>,
  K extends keyof T,
>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>

  for (const key of keys) {
    result[key] = obj[key]
  }

  return result
}
