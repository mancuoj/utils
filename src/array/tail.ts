/**
 * Returns a new array with all elements except for the first.
 *
 * @param arr - The array to get the tail of.
 * @returns A new array containing all elements of the input array except for the first one.
 *
 * @example
 * ```ts
 * const arr1 = [1, 2, 3]
 * const arr2 = [1]
 * const arr3 = []
 *
 * console.log(tail(arr1));  //=> [2, 3]
 * console.log(tail(arr2));  //=> []
 * console.log(tail(arr3));  //=> []
 * ```
 */
export function tail(arr: readonly []): []
export function tail<T>(arr: readonly [T]): []
export function tail<T>(arr: readonly [T, ...T[]]): T[]
export function tail<T>(arr: readonly T[]): T[]
export function tail<T>(arr: readonly T[]): T[] {
  if (arr.length <= 1) {
    return []
  }

  return arr.slice(1)
}
