import { random } from './random'

export function randomInt(maximum: number): number
export function randomInt(minimum: number, maximum: number): number

/**
 * Generates a random integer within a given range.
 *
 * If only one argument is provided, a random integer between 0 and the given number is returned.
 *
 * @param minimum - The lower bound (inclusive).
 * @param maximum - The upper bound (exclusive).
 * @returns A random integer within the specified range.
 *
 * @example
 * ```ts
 * console.log(randomInt(5));     // The result will be a random integer between 0 and 5.
 * console.log(randomInt(5, 5));  // An error will be thrown.
 * console.log(randomInt(5, 0));  // An error will be thrown.
 * ```
 */
export function randomInt(minimum: number, maximum?: number): number {
  return Math.floor(random(minimum, maximum!))
}
