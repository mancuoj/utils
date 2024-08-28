import { getWords } from './get-words'

/**
 * Converts a string to snake case.
 *
 * Snake case is the nameing convention in which each word is written in lowercase and
 * separated by an underscore (_) character.
 *
 * @param str The string to convert to snake case.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(snakeCase('helloWorld'));   //=> 'hello_world'
 * console.log(snakeCase('Hello world'));  //=> 'hello_world'
 * console.log(snakeCase('hello-world'));  //=> 'hello_world'
 * console.log(snakeCase('HTTPRequest'));  //=> 'http_request'
 * ```
 */
export function snakeCase(str: string): string {
  return getWords(str).map(word => word.toLowerCase()).join('_')
}
