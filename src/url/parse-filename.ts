import { parseURL } from './parse-url'

const FILENAME_RE = /\/([^/]+)$/
const FILENAME_STRICT_RE = /\/([^/][^./]*\.[^/]+)$/

interface Options {
  strict?: boolean
}

/**
 * Parses a url and returns last segment in path as filename.
 *
 * If `{ strict: true }` is passed as the second argument, it will
 * only return the last segment only if ending with an extension.
 *
 * @param input - The URL to parse.
 * @param opt - `{ strict: true }` to use strict parsing.
 * @returns The filename, or `undefined` if no filename is found.
 */
export function parseFilename(input: string, opt: Options = {}): string | undefined {
  const { pathname } = parseURL(input)

  if (!pathname) {
    return undefined
  }

  const match = pathname.match(opt.strict ? FILENAME_STRICT_RE : FILENAME_RE)
  return match ? match[1] : undefined
}
