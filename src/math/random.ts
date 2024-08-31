/**
 * Generates a random number within a given range.
 *
 * If only one argument is provided, a number between 0 and the given number is returned.
 *
 * @param minimum - The lower bound (inclusive).
 * @param maximum - The upper bound (exclusive).
 * @returns A random number within the specified range. It can be an integer or a decimal.
 *
 * @example
 * ```ts
 * console.log(random(5));     // The result will be between 0 and 5.
 * console.log(random(5, 5));  // An error will be thrown.
 * console.log(random(5, 0));  // An error will be thrown.
 * ```
 */
export function random(maximum: number): number
export function random(minimum: number, maximum: number): number
export function random(minimum: number, maximum?: number): number
export function random(minimum: number, maximum?: number): number {
  if (maximum === undefined) {
    maximum = minimum
    minimum = 0
  }

  if (minimum >= maximum) {
    throw new Error('Invalid input: the maximum value must be greater than the minimum value.')
  }

  return Math.random() * (maximum - minimum) + minimum
}
