const TRAILING_SLASH_RE = /\/$|\/\?|\/#/

/**
 * Checks if a path has a trailing slash.
 *
 * @param path - The path to check.
 * @param respectQueryAndFragment - Whether to respect query and fragment in the path.
 * @returns `true` if the path has a trailing slash, otherwise `false`.
 *
 * @example
 * ```ts
 * hasTrailingSlash('/file.txt/');           //=> true
 * hasTrailingSlash('/file.txt/?query=1');   //=> true
 * hasTrailingSlash('/file.txt/#fragment');  //=> true
 * hasTrailingSlash('/file.txt');            //=> false
 * ```
 */
export function hasTrailingSlash(path: string, respectQueryAndFragment?: boolean): boolean {
  if (!respectQueryAndFragment) {
    return path.endsWith('/')
  }
  return TRAILING_SLASH_RE.test(path)
}
