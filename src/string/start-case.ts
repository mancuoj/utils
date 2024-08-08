import { getWords } from './get-words'

/**
 * Converts the first character of each word in a string to uppercase and the remaining characters to lowercase.
 *
 * Start case is the naming convention in which each word is written with an initial capital letter.
 *
 * @param str - The string to convert.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(startCase('hello world'));  //=> 'Hello World'
 * console.log(startCase('HELLO WORLD'));  //=> 'Hello World'
 * console.log(startCase('hello-world'));  //=> 'Hello World'
 * console.log(startCase('hello_world'));  //=> 'Hello World'
 * ```
 */
export function startCase(str: string): string {
  return getWords(str)
    .map(word =>
      word === word.toUpperCase()
        ? word
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(' ')
}
