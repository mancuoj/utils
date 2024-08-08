import { shade } from './shade'

/**
 * Returns a function that applies a shade to an RGB color with a specified intensity.
 *
 * @param intensity - A number between 0 and 1 representing the intensity of the shade.
 * @returns A function that takes an RGB color and returns a new RGB color with the applied shade.
 *
 * @example
 * ```ts
 * const shade50 = withShade(0.5);
 * console.log(shade50([255, 0, 0]));  //=> [128, 0, 0]
 * ```
 */
export function withShade(intensity: number) {
  return (hex: number[]) => shade(hex, intensity)
}
