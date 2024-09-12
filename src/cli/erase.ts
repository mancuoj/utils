import { CSI, cursor } from './cursor'

export const erase = {
  screen: `${CSI}2J`,
  line: `${CSI}2K`,
  lineEnd: `${CSI}K`,
  lineStart: `${CSI}1K`,
  up: (count = 1) => `${CSI}1J`.repeat(count),
  down: (count = 1) => `${CSI}J`.repeat(count),
  lines(count: number) {
    let clear = ''
    for (let i = 0; i < count; i++)
      clear += this.line + (i < count - 1 ? cursor.up() : '')
    if (count)
      clear += cursor.left
    return clear
  },
}
