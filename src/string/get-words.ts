const CASE_SPLIT_PATTERN = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g

/**
 * Extracts words from a given string based on various casing conventions like camelCase, PascalCase, snake_case, etc.
 *
 * The function uses a regular expression to identify words which may include:
 * - A sequence of one uppercase letter followed by lowercase letters
 * - A sequence of numbers
 * - A sequence of uppercase letters, provided they are not followed by lowercase letters
 *
 * @param str - The string from which to extract words.
 * @returns An array of words extracted from the input string.
 *
 * @example
 * ```ts
 * console.log(getWords('helloWorld'));      //=> ['hello', 'World']
 * console.log(getWords('HelloWorld'));      //=> ['Hello', 'World']
 * console.log(getWords('hello-world'));     //=> ['hello', 'world']
 * console.log(getWords('hello_world123'));  //=> ['hello', 'world', '123']
 * console.log(getWords('helloWorldHTTP'));  //=> ['hello', 'World', 'HTTP']
 * ```
 */
export function getWords(str: string): string[] {
  return Array.from(str.match(CASE_SPLIT_PATTERN) ?? [])
}
