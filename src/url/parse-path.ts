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

export function parsePath(input: string): ParsedURL {
  const [, pathname, search = '', hash = ''] = input.match(/^([^#?]*)(\?[^#]*)?(#.*)?$/)!
  return { pathname, search, hash }
}
