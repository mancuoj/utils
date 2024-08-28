/**
 *  Converts the first character of a string to uppercase.
 *
 * @param str - The string that is to be converted.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(upperFirst('hello'));  //=> 'Hello'
 * console.log(upperFirst('Hello'));  //=> 'Hello'
 * console.log(upperFirst('HELLO'));  //=> 'HELLO'
 * ```
 */
export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
