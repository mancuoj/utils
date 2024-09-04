function avoidProtoPollution(key: string, value: any): any {
  if (
    key === '__proto__'
    || (key === 'constructor' && value && typeof value === 'object' && 'prototype' in value)
  ) {
    console.warn(`[parseJSON] Dropping "${key}" key to prevent prototype pollution.`)
    return undefined
  }
  return value
}

const specialValues: Record<string, any> = {
  'true': true,
  'false': false,
  'undefined': undefined,
  'null': null,
  'nan': Number.NaN,
  'infinity': Number.POSITIVE_INFINITY,
  '-infinity': Number.NEGATIVE_INFINITY,
}

const SUSPECT_PROTO_RE = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
const SUSPECT_CONSTRUCTOR_RE = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0{2}73)(?:t|\\u0{2}74)(?:r|\\u0{2}72)(?:u|\\u0{2}75)(?:c|\\u0{2}63)(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:r|\\u0{2}72)"\s*:/
const JSON_SIG_RE = /^\s*["[{]|^\s*-?\d{1,16}(?:.\d{1,17})?(?:E[+-]?\d+)?\s*$/i

interface Options {
  strict?: boolean
}

/**
 * Safely parses a JSON string, preventing prototype pollution and handling special cases.
 *
 * - Type safe
 * - Fast fallback to input if is not string
 * - Fast lookup for known string values
 * - Fallback to original value if parse fails (empty or any plain string)
 * - Avoid prototype pollution
 * - Strict mode, it will throw an error if the input is not a valid JSON string or parsing fails
 *
 * @param value - The value to parse, typically a JSON string.
 * @param options - Options to control the parsing behavior, including 'strict' mode.
 * @returns The parsed JSON object, non string values and built-ins will be still returned as-is
 *
 * @example
 * ```ts
 * console.log(parseJSON('{"a": 1}'));                                         //=> { a: 1 }
 * console.log(parseJSON('TRUE'));                                             //=> true
 * console.log(parseJSON('abc'));                                              //=> 'abc'
 * console.log(parseJSON('{ "user": { "__proto__": { "isAdmin": true } } }');  //=> { user: {} }
 * console.log(parseJSON('[foo');                                              //=> '[foo'
 * console.log(parseJSON('[foo', { strict: true }));                           // will throw an error
 * ```
 */
export function parseJSON<T = unknown>(value: any, options: Options = {}): T {
  if (typeof value !== 'string') {
    return value
  }

  const _value = value.trim()
  if (
    value[0] === '"'
    && value.endsWith('"')
    && !value.includes('\\')
  ) {
    return _value.slice(1, -1) as T
  }

  if (_value.length <= 9) {
    const _lval = _value.toLowerCase()
    if (_lval in specialValues) {
      return specialValues[_lval] as T
    }
  }

  if (!JSON_SIG_RE.test(value)) {
    if (options.strict) {
      throw new SyntaxError('[parseJSON] Invalid JSON')
    }
    return value as T
  }

  try {
    if (SUSPECT_PROTO_RE.test(value) || SUSPECT_CONSTRUCTOR_RE.test(value)) {
      if (options.strict) {
        throw new Error('[parseJSON] Possible prototype pollution')
      }
      return JSON.parse(value, avoidProtoPollution)
    }
    return JSON.parse(value)
  }
  catch (error) {
    if (options.strict) {
      throw error
    }
    return value as T
  }
}
