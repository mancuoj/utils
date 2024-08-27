/**
 * Calculates the sum of all numbers in an array.
 *
 * @param numbers - An array of numbers to be summed.
 * @returns The sum of all numbers in the array.
 *
 * @example
 * ```ts
 * console.log(sum([1, 2, 3, 4, 5]));  //=> 15
 * console.log(sum([1, 2, 3]));        //=> 6
 * ```
 */
export function sum(numbers: readonly number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
