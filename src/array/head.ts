/**
 * Returns the first element of an array.
 *
 * This function takes an array and returns the first element of the array.
 * If the array is empty, the function returns `undefined`.
 *
 * @param arr - The array from which to get the first element.
 * @returns The first element of the array, or `undefined` if the array is empty.
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3];
 * const arr2 = [];
 *
 * console.log(head(arr));   //=> 1
 * console.log(head(arr2));  //=> undefined
 * ```
 */
export function head<T>(arr: readonly [T, ...T[]]): T
export function head<T>(arr: readonly T[]): T | undefined
export function head<T>(arr: readonly T[]): T | undefined {
  return arr[0]
}
