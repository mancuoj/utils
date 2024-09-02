/**
 * Check if the input starts with `./` or `../`.
 *
 * @param input - The input URL or pathname.
 * @returns `true` if the input is relative, otherwise `false`.
 *
 * @example
 * ```ts
 * console.log(isRelative('./file.txt'));  //=> true
 * console.log(isRelative('/file.txt'));   //=> false
 * ```
 */
export function isRelative(input: string): boolean {
  return input.startsWith('./') || input.startsWith('../')
}
