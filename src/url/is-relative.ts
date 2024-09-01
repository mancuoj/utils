/**
 * Check if a path starts with `./` or `../`.
 *
 * @param path - The path to check.
 * @returns `true` if the path is relative, otherwise `false`.
 *
 * @example
 * ```ts
 * console.log(isRelative('./file.txt'));  //=> true
 * console.log(isRelative('/file.txt'));   //=> false
 * ```
 */
export function isRelative(path: string): boolean {
  return path.startsWith('./') || path.startsWith('../')
}
