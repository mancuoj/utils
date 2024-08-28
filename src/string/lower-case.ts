import { getWords } from './get-words'

/**
 * Converts a string to lowercase.
 *
 * @param str - The string that is to be converted.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(lowerCase('helloWorld'));   //=> 'hello world'
 * console.log(lowerCase('HELLO WORLD'));  //=> 'hello world'
 * console.log(lowerCase('Hello-world'));  //=> 'hello world'
 * console.log(lowerCase('HTTPRequest'));  //=> 'http request'
 * ```
 */
export function lowerCase(str: string): string {
  return getWords(str).map(word => word.toLowerCase()).join(' ')
}
