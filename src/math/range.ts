/**
 * Creates an array of numbers in the specified range.
 *
 * @param start - The starting number of the range (inclusive).
 * @param end - The ending number of the range (exclusive).
 * @param step - The step value for the range (optional, defaults to 1).
 * @returns An array of numbers from start to end (exclusive) with the specified step.
 *
 * @example
 * ```ts
 * console.log(range(5));          //=> [0, 1, 2, 3, 4]
 * console.log(range(2, 5));       //=> [2, 3, 4]
 * console.log(range(0, -4, -1));  //=> [0, -1, -2, -3]
 * ```
 */
export function range(start: number, end?: number, step?: number): number[] {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === undefined) {
    step = 1
  }

  if (!Number.isInteger(step) || step === 0) {
    throw new Error('Step must be a non-zero integer.')
  }

  const length = Math.max(Math.ceil((end - start) / step), 0)
  return Array.from({ length }, (_, i) => start + i * step)
}
