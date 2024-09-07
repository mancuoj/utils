import { type ParsedURL, protocolRelative } from './parse-path'

export function stringifyParsedURL(parsed: Partial<ParsedURL>): string {
  const pathname = parsed.pathname || ''
  const search = parsed.search || ''
  const hash = parsed.hash || ''
  const auth = parsed.auth ? `${parsed.auth}@` : ''
  const host = parsed.host || ''
  const proto
    = parsed.protocol || parsed[protocolRelative]
      ? `${parsed.protocol || ''}//`
      : ''

  return proto + auth + host + pathname + search + hash
}
