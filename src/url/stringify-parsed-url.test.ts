import { parseURL } from './parse-url'
import { stringifyParsedURL } from './stringify-parsed-url'

describe('stringifyParsedURL', () => {
  const tests = [
    {
      input: parseURL('//test'),
      output: '//test',
    },
    {
      input: parseURL('https://test.com'),
      output: 'https://test.com',
    },
    {
      input: parseURL('http://test.com?foo=bar'),
      output: 'http://test.com?foo=bar',
    },
    {
      input: parseURL('/test'),
      output: '/test',
    },
    {
      input: parseURL('https://test.com/t:est'),
      output: 'https://test.com/t:est',
    },
    {
      input: parseURL(String.raw`https://host.name\@foo.bar/meme3.php?url=http://0.0.0.0/2.svg`),
      output: 'https://host.name/@foo.bar/meme3.php?url=http://0.0.0.0/2.svg',
    },
    {
      input: parseURL('https://domain.test:3000#owo'),
      output: 'https://domain.test:3000#owo',
    },
    {
      input: parseURL('\0https://invalid.com'),
      output: 'https://invalid.com',
    },
    {
      input: parseURL('https://user:pass@example.com'),
      output: 'https://user:pass@example.com',
    },
  ]

  for (const t of tests) {
    it(t.input.toString(), () => {
      expect(stringifyParsedURL(t.input)).toEqual(t.output)
    })
  }
})
