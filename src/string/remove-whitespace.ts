/**
 * Removes all whitespace characters from a string.
 *
 * Includes spaces, tabs, newlines, and other whitespace characters.
 *
 * @param str - The input string from which to remove whitespace.
 * @returns A new string with all whitespace characters removed.
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '')
}
