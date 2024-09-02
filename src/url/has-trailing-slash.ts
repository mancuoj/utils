const TRAILING_SLASH_RE = /\/$|\/\?|\/#/

/**
 * Checks if the input has a trailing slash.
 *
 * @param input - The input URL or pathname.
 * @param respectQueryAndFragment - Whether to respect query and fragment in the input.
 * @returns `true` if the input has a trailing slash, otherwise `false`.
 *
 * @example
 * ```ts
 * hasTrailingSlash('/file.txt/');                 //=> true
 * hasTrailingSlash('/file.txt/?query=1', true);   //=> true
 * hasTrailingSlash('/file.txt/#fragment', true);  //=> true
 * ```
 */
export function hasTrailingSlash(input: string, respectQueryAndFragment = false): boolean {
  if (!respectQueryAndFragment) {
    return input.endsWith('/')
  }
  return TRAILING_SLASH_RE.test(input)
}
