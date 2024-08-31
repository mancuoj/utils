/**
 * Returns the last element of an array.
 *
 * @param arr - The array from which to get the last element.
 * @returns The last element of the array, or `undefined` if the array is empty.
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3];
 * const arr2 = [];
 *
 * console.log(last(arr));   //=> 3
 * console.log(last(arr2));  //=> undefined
 * ```
 */
export function last<T>(arr: readonly [...T[], T]): T
export function last<T>(arr: readonly T[]): T | undefined
export function last<T>(arr: readonly T[]): T | undefined {
  return arr[arr.length - 1]
}
