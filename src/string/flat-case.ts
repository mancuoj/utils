import { getWords } from './get-words'

/**
 * Converts a string to flat case.
 *
 * Flat case is the naming convention in which each word is written in lowercase and
 * concatenated with no spaces.
 *
 * @param str The string to convert to flat case
 * @returns The converted string
 *
 * @example
 * ```ts
 * console.log(flatCase('helloWorld'));   //=> 'helloworld'
 * console.log(flatCase('Hello world'));  //=> 'helloworld'
 * console.log(flatCase('hello-world'));  //=> 'helloworld'
 * console.log(flatCase('HTTPRequest'));  //=> 'httpRequest'
 * ```
 */
export function flatCase(str: string): string {
  return getWords(str).map(word => word.toLowerCase()).join('')
}
