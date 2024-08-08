import { parseColor } from './parse-color'
import { toHexValue } from './to-hex-value'
import { withShade } from './with-shade'
import { withTint } from './with-tint'

const _variants = {
  50: withTint(0.95),
  100: withTint(0.9),
  200: withTint(0.75),
  300: withTint(0.6),
  400: withTint(0.3),
  500: (c: number[]) => c,
  600: withShade(0.9),
  700: withShade(0.6),
  800: withShade(0.45),
  900: withShade(0.3),
  950: withShade(0.2),
}

/**
 * Generates a set of color variants based on the original color and the provided variants.
 *
 * @param color - The original color strings in the formats `#ABC`, `#AABBCC`, or `r,g,b`.
 * @param variants - An object where keys are variant names and values are functions that take RGB components and return modified RGB components.
 * @returns An object where keys are variant names and values are the corresponding color variants in hexadecimal format.
 *
 * @example
 * ```ts
 * const colors = getThemeColors('#ABABAB');  // or getThemeColors('172,172,172')
 * // This will generate the following colors:
 * // {
 * //   50: '#F7F8F9',
 * //   100: '#F0F1F3',
 * //   200: '#D8DCE2',
 * //   300: '#C1C7D1',
 * //   400: '#939EAE',
 * //   500: '#ABABAB',
 * //   600: '#9A9A9A',
 * //   700: '#676767',
 * //   800: '#4D4D4D',
 * //   900: '#333333',
 * //   950: '#222222',
 * // }
 * ```
 */
export function getThemeColors(color: string, variants = _variants): Record<string, string> {
  const colors: Record<string, string> = {}
  const components = parseColor(color)

  for (const [name, fn] of Object.entries(variants)) {
    colors[name] = toHexValue(fn(components))
  }

  return colors
}
