import { getWords } from './get-words'

export function startCase(str: string): string {
  const words = getWords(str.trim())
  let result = ''
  for (const word of words) {
    if (result)
      result += ' '

    if (word === word.toUpperCase())
      result += word
    else
      result += word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  return result
}
