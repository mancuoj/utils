/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 * If only one argument is provided, it generates a random integer between 0 and that number.
 *
 * @param min - The minimum integer value (inclusive).
 * @param max - The maximum integer value (inclusive). If not provided, it defaults to `min`, and `min` defaults to 0.
 * @returns A random integer between min and max.
 *
 * @example
 * ```ts
 * console.log(randomInteger(5));      //=> 3
 * console.log(randomInteger(5, 10));  //=> 6
 * ```
 */
export function randomInteger(min: number, max?: number): number {
  if (max === undefined) {
    max = min
    min = 0
  }

  if (min > max) {
    throw new Error('Minimum value cannot be greater than the maximum value.')
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}
