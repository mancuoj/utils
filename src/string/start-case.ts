import { getWords } from './get-words'

export function startCase(str: string): string {
  return getWords(str.trim())
    .map(word =>
      word === word.toUpperCase()
        ? word
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(' ')
}
