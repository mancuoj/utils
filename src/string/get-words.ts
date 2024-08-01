const CASE_SPLIT_PATTERN = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g

/**
 * Extracts words from a given string based on various casing conventions like camelCase, PascalCase, snake_case, etc.
 *
 * The function uses a regular expression to identify words which may include:
 * - A sequence of one uppercase letter followed by lowercase letters
 * - A sequence of numbers
 * - A sequence of uppercase letters, provided they are not followed by lowercase letters
 *
 * @param {string} str - The string from which to extract words.
 * @returns {string[]} An array of words extracted from the input string.
 *
 * @example
 * ```ts
 * const words1 = getWords('helloWorld');      // words will be ['hello', 'World']
 * const words2 = getWords('HelloWorld');      // words will be ['Hello', 'World']
 * const words3 = getWords('hello-world');     // words will be ['hello', 'world']
 * const words4 = getWords('hello_world123');  // words will be ['hello', 'world', '123']
 * const words5 = getWords('helloWorldHTTP');  // words will be ['hello', 'World', 'HTTP']
 * ```
 */
export function getWords(str: string): string[] {
  return Array.from(str.match(CASE_SPLIT_PATTERN) ?? [])
}
