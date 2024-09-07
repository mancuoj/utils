import { hasProtocol } from './has-protocol'
import { type ParsedURL, parsePath, protocolRelative } from './parse-path'

const SPECIAL_PROTOCOL_RE = /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i

function parseSpecialProtocol(match: RegExpMatchArray): ParsedURL {
  const [, protocol, pathname] = match
  return {
    protocol: protocol.toLowerCase(),
    pathname,
    href: protocol + pathname,
    auth: '',
    host: '',
    search: '',
    hash: '',
  }
}

function parseRegularURL(input: string): ParsedURL {
  const [, protocol = '', auth, hostAndPath] = input
    .replace(/\\/g, '/')
    .match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)!

  let [, host, path] = hostAndPath.match(/([^#/?]*)(.*)/)!

  if (protocol === 'file:') {
    path = path.replace(/\/(?=[A-Z]:)/i, '')
  }

  const { pathname, search, hash } = parsePath(path)
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : '',
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol,
  }
}

/**
 * Parses a URL string into a `ParsedURL` object with the URL's `protocol`,
 * `auth`, `host`, `pathname`, `search`, and `hash` components.
 *
 * @param input - The URL string to parse.
 * @param defaultProtocol - Optional, the default protocol to use if the input does not have a protocol.
 * @returns The parsed URL object.
 *
 * @example
 * ```ts
 * console.log(parseURL("http://foo.com/foo?test=123#token"));
 * //=> { protocol: 'http:', auth: '', host: 'foo.com', pathname: '/foo', search: '?test=123', hash: '#token' }
 *
 * console.log(parseURL("foo.com/foo?test=123#token"));
 * //=> { pathname: 'foo.com/foo', search: '?test=123', hash: '#token' }
 *
 * parseURL("foo.com/foo?test=123#token", "https://");
 * // { protocol: 'https:', auth: '', host: 'foo.com', pathname: '/foo', search: '?test=123', hash: '#token' }
 * ```
 */
export function parseURL(input: string, defaultProtocol?: string): ParsedURL {
  const match = input.match(SPECIAL_PROTOCOL_RE)
  if (match) {
    return parseSpecialProtocol(match)
  }

  if (!hasProtocol(input, true)) {
    return defaultProtocol ? parseURL(defaultProtocol + input) : parsePath(input)
  }

  return parseRegularURL(input)
}
