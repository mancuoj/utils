import { capitalize } from './capitalize'
import { getWords } from './get-words'

/**
 * Converts a string to pascal case.
 *
 * Pascal case is the nameing convention in which each word is capitalized and
 * concatenated with no spaces.
 *
 * @param str - The string to convert to pascal case.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(pascalCase('helloWorld'));   //=> 'HelloWorld'
 * console.log(pascalCase('Hello world'));  //=> 'HelloWorld'
 * console.log(pascalCase('hello-world'));  //=> 'HelloWorld'
 * console.log(pascalCase('HTTPRequest'));  //=> 'HttpRequest'
 * ```
 */
export function pascalCase(str: string): string {
  return getWords(str).map(word => capitalize(word)).join('')
}
