import { capitalize } from './capitalize'
import { getWords } from './get-words'
import { upperFirst } from './upper-first'

/**
 * Converts a string to train case.
 *
 * Train case is the naming convention in which each word is capitalized and
 * separated by a hyphen (-) character.
 *
 * @param str - The string to convert to train case
 * @param normalize - Whether to strictly only have the first letter uppercased
 * @returns The converted string
 *
 * @example
 * ```ts
 * console.log(trainCase('helloWorld'));   //=> 'hello-world'
 * ```
 */
export function trainCase(str: string, normalize = false): string {
  return getWords(str)
    .map(word => normalize ? capitalize(word) : upperFirst(word))
    .join('-')
}
