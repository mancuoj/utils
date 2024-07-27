type ClassArray = Array<ClassValue>
type ClassDictionary = Record<string, any>
export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassArray
  | ClassDictionary

function toVal(input: ClassValue): string | number {
  if (typeof input === 'string' || typeof input === 'number')
    return input

  if (Array.isArray(input))
    return input.map(toVal).filter(Boolean).join(' ')

  if (typeof input === 'object' && input !== null)
    return Object.keys(input).filter(key => Boolean(input[key])).join(' ')

  return ''
}

export function clsx(...args: ClassValue[]): string {
  return args.map(toVal).filter(Boolean).join(' ')
}
