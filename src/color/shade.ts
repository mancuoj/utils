/**
 * Adjusts the darkness of an RGB color by adding a shade.
 *
 * This function takes an array of three numbers representing the RGB components
 * of a color and an intensity factor, and returns a new RGB color where each
 * component is adjusted to be closer to 0 (black) based on the intensity.
 *
 * @param components - An array of three numbers representing the RGB components.
 * @param intensity - A number between 0 and 1 representing the intensity of the shade. 0 means no change, and 1 means full black.
 * @returns A new array of three numbers representing the shaded RGB components.
 *
 * @example
 * ```ts
 * console.log(shade([255, 0, 0], 0.5));       //=> [128, 0, 0]
 * console.log(shade([100, 100, 100], 0.25));  //=> [25, 25, 25]
 * console.log(shade([100, 100, 100], 1));     //=> [100, 100, 100]
 * ```
 */
export function shade(components: number[], intensity: number): number[] {
  return components.map(c => Math.round(c * intensity))
}
