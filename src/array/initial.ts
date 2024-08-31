/**
 * Returns all elements of an array except the last one.
 *
 * @param arr - The array from which to get the initial elements.
 * @returns A new array containing all elements of the input array except for the last one.
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4, 5];
 * const arr2 = [1];
 * const arr3 = [];
 *
 * console.log(initial(arr));   //=> [1, 2, 3, 4]
 * console.log(initial(arr2));  //=> []
 * console.log(initial(arr3));  //=> []
 * ```
 */
export function initial(arr: readonly []): []
export function initial<T>(arr: readonly [T]): []
export function initial<T>(arr: readonly [...T[], T]): T[]
export function initial<T>(arr: readonly T[]): T[]
export function initial<T>(arr: readonly T[]): T[] {
  return arr.slice(0, -1)
}
