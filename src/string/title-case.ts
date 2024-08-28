import { getWords } from './get-words'
import { upperFirst } from './upper-first'

const titleCaseExceptions = /^(?:a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i

export function titleCase(str: string): string {
  const words = getWords(str)
  if (words.length === 0) {
    return ''
  }

  const [first, ...rest] = words
  const res = [upperFirst(first)]

  for (const word of rest) {
    res.push(
      titleCaseExceptions.test(word) ? word.toLowerCase() : upperFirst(word),
    )
  }

  return res.join(' ')
}
