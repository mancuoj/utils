const PROTOCOL_RE = /^[\s\w\0+.-]{2,}:(?:[/\\]{2})?/
const PROTOCOL_STRICT_RE = /^[\s\w\0+.-]{2,}:[/\\]{1,2}/
const PROTOCOL_RELATIVE_RE = /^(?:[/\\]\s*){2,}[^/\\]/

/**
 * Options for the `hasProtocol` function.
 *
 * @property acceptRelative - Whether to accept relative URLs.
 * @property strict - Whether to use strict protocol checking.
 */
interface HasProtocolOptions {
  acceptRelative?: boolean
  strict?: boolean
}

/**
 * Check if the input has a protocol.
 *
 * `{ acceptRelative: true }` to accept relative URLs,
 * `{ strict: true }` to use strict protocol checking.
 *
 * @param input - The input URL or pathname.
 * @param opts - Options for the function.
 * @returns `true` if the input has a protocol, otherwise `false`.
 *
 * @example
 * ```ts
 * console.log(hasProtocol('example.com'));                         //=> false
 * console.log(hasProtocol('https://example.com'));                 //=> true
 * console.log(hasProtocol('ftp://'));                              //=> true
 * console.log(hasProtocol('//example.com'));                       //=> false
 * console.log(hasProtocol('//example.com', true));                 //=> true
 * console.log(hasProtocol('ftp:\example.com', { strict: true }));  //=> false
 * ```
 */
export function hasProtocol(input: string, opts: boolean | HasProtocolOptions = {}): boolean {
  if (typeof opts === 'boolean') {
    opts = { acceptRelative: opts }
  }

  if (opts.strict) {
    return PROTOCOL_STRICT_RE.test(input)
  }

  return (
    PROTOCOL_RE.test(input)
    || (opts.acceptRelative ? PROTOCOL_RELATIVE_RE.test(input) : false)
  )
}
