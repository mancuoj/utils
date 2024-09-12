export const ESC = '\x1B'
export const CSI = `${ESC}[`
export const beep = '\x07'

export const cursor = {
  left: `${CSI}G`,
  hide: `${CSI}?25l`,
  show: `${CSI}?25h`,
  save: `${ESC}7`,
  restore: `${ESC}8`,
  up: (count = 1) => `${CSI}${count}A`,
  down: (count = 1) => `${CSI}${count}B`,
  forward: (count = 1) => `${CSI}${count}C`,
  backward: (count = 1) => `${CSI}${count}D`,
  nextLine: (count = 1) => `${CSI}E`.repeat(count),
  prevLine: (count = 1) => `${CSI}F`.repeat(count),
  to: (x: number, y?: number) => {
    if (!y) {
      return `${CSI}${x + 1}G`
    }
    return `${CSI}${y + 1};${x + 1}H`
  },
  move: (x: number, y: number) => {
    let res = ''

    if (x < 0)
      res += `${CSI}${-x}D`
    else if (x > 0)
      res += `${CSI}${x}C`

    if (y < 0)
      res += `${CSI}${-y}B`
    else if (y > 0)
      res += `${CSI}${y}A`

    return res
  },
}
