import { getWords } from './get-words'

/**
 * Converts a string to kebab case.
 *
 * Kebab case is the nameing convention in which each word is written in lowercase and
 * separated by a hyphen (-) character.
 *
 * @param str - The string to convert to kebab case.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(kebabCase('helloWorld'));   //=> 'hello-world'
 * console.log(kebabCase('Hello world'));  //=> 'hello-world'
 * console.log(kebabCase('hello-world'));  //=> 'hello-world'
 * console.log(kebabCase('HTTPRequest'));  //=> 'http-request'
 * ```
 */
export function kebabCase(str: string): string {
  return getWords(str).map(word => word.toLowerCase()).join('-')
}
