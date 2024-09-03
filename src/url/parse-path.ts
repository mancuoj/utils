const protocolRelative = Symbol.for('protocolRelative')

export interface ParsedURL {
  protocol?: string
  host?: string
  auth?: string
  href?: string
  pathname?: string
  hash?: string
  search?: string
  [protocolRelative]?: boolean
}

/**
 * Parses a URL path into three components.
 *
 * @param input - The URL path to parse.
 * @returns An object with the pathname, search, and hash components.
 *
 * @example
 * ```ts
 * console.log(parsePath('www.example.com?query#fragment'))
 * //=> { pathname: 'www.example.com', search: '?query', hash: '#fragment' }
 * ```
 */
export function parsePath(input: string): ParsedURL {
  const [, pathname, search = '', hash = ''] = input.match(/^([^#?]*)(\?[^#]*)?(#.*)?$/)!
  return { pathname, search, hash }
}
