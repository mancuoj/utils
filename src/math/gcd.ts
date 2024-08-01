/**
 * Euclidean algorithm to calculate the Greatest Common Divisor (GCD)
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
  let tmp: number
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    tmp = b
    b = a % b
    a = tmp
  }
  return a
}
