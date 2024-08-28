import { getWords } from './get-words'

/**
 * Converts a string to uppercase.
 *
 * @param str - The string that is to be converted.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(upperCase('helloWorld'));   //=> 'HELLO WORLD'
 * console.log(upperCase('HELLO WORLD'));  //=> 'HELLO WORLD'
 * console.log(upperCase('Hello-world'));  //=> 'HELLO WORLD'
 * console.log(upperCase('HTTPRequest'));  //=> 'HTTP REQUEST'
 * ```
 */
export function upperCase(str: string): string {
  return getWords(str).map(word => word.toUpperCase()).join(' ')
}
