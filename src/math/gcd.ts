/**
 * Calculate the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.
 *
 * @param a - First number
 * @param b - Second number
 * @returns The greatest common divisor of a and b
 *
 * @example
 * ```ts
 * console.log(gcd(48, 18));   //=> 6
 * console.log(gcd(48, -18));  //=> 6
 * ```
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }

  return a
}
