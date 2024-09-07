/**
 * Removes all whitespace characters from a string.
 *
 * Includes spaces, tabs, newlines, and null bytes.
 *
 * @param str - The input string from which to remove whitespace.
 * @returns A new string with all whitespace characters removed.
 *
 * @example
 * ```ts
 * console.log(removeWhitespace('  hello world  !'));     //=> 'helloworld!'
 * console.log(removeWhitespace('\rhello\tworld\n!\0'));  //=> 'helloworld!'
 * ```
 */
export function removeWhitespace(str: string): string {
  return str.replace(/[\s\0]+/g, '')
}
