import { sum } from './sum'

/**
 * Calculates the sum of an array of numbers by applying a function to each element.
 *
 * If the array is empty, returns 0.
 *
 * @param arr - An array of numbers to calculate the sum.
 * @param fn - A function to apply to each element of the array.
 * @returns The sum of all the numbers as determined by the `fn` function.
 *
 * @example
 * ```ts
 * console.log(sumBy([1, 2, 3], x => x));                         //=> 6
 * console.log(sumBy([1, 2, 3], x => x * 2));                     //=> 12
 * console.log(sumBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a));  //=> 6
 * ```
 */
export function sumBy<T>(arr: readonly T[], fn: (item: T) => number): number {
  const nums = arr.map(x => fn(x))
  return sum(nums)
}
