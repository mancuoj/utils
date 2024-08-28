import { capitalize } from './capitalize'
import { getWords } from './get-words'

/**
 * Converts a string to camel case.
 *
 * Camel case is the nameing convention in which the first word is written in lowercase and
 * the rest of the words begin with an uppercase letter, concatenated with no spaces.
 *
 * @param str - The string to convert to camel case.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(camelCase('helloWorld'));  //=> 'helloWorld'
 * console.log(camelCase('Hello world'));  //=> 'helloWorld'
 * console.log(camelCase('hello-world'));  //=> 'helloWorld'
 * console.log(camelCase('HTTPRequest'));  //=> 'httpRequest'
 * ```
 */
export function camelCase(str: string): string {
  const words = getWords(str)
  if (words.length === 0) {
    return str
  }

  const [first, ...rest] = words
  return `${first.toLowerCase()}${rest.map(word => capitalize(word)).join('')}`
}
