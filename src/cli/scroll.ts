import { CSI } from './cursor'

export const scroll = {
  /**
   * Scroll display up a specific amount of lines. Default to 1.
   */
  up: (count = 1) => `${CSI}S`.repeat(count),

  /**
   * Scroll display down a specific amount of lines. Default to 1.
   */
  down: (count = 1) => `${CSI}T`.repeat(count),
}
