const PROTOCOL_SCRIPT_RE = /^[\s\0]*(?:blob|data|javascript|vbscript):$/i

/**
 * Check if the input protocol is any of the dangerous `blob:`, `data:`,
 * `javascript:`, or `vbscript:` protocols.
 *
 * @param protocol - The protocol to check.
 * @returns `true` if the protocol is a script protocol, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isScriptProtocol('blob:'));  //=> true
 * console.log(isScriptProtocol('http:'));  //=> false
 * ```
 */
export function isScriptProtocol(protocol: string): boolean {
  return PROTOCOL_SCRIPT_RE.test(protocol)
}
