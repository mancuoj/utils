/**
 * Checks if a value is within a range.
 *
 * @param value - The value to check.
 * @param minimum - The lower bound of the range (inclusive).
 * @param maximum - The upper bound of the range (exclusive).
 * @returns `true` if the value is within the range, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(inRange(5, 10));      //=> true
 * console.log(inRange(5, 10, 20));  //=> true
 * console.log(inRange(5, 10, 5));   // will throws an Error
 * ```
 */
export function inRange(value: number, minimum: number, maximum?: number): boolean {
  if (maximum === undefined) {
    maximum = minimum
    minimum = 0
  }

  if (minimum >= maximum) {
    throw new Error('Minimum must be less than maximum')
  }

  return minimum <= value && value < maximum
}
