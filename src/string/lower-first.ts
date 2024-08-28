/**
 * Converts the first character of a string to lowercase.
 *
 * @param str - The string that is to be converted.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(lowerFirst('hello'));  //=> 'hello'
 * console.log(lowerFirst('Hello'));  //=> 'hello'
 * console.log(lowerFirst('HELLO'));  //=> 'hELLO'
 * ```
 */
export function lowerFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
