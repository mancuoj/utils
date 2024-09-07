import { protocolRelative } from './parse-path'
import { parseURL } from './parse-url'

describe('parseURL', () => {
  const tests = [
    {
      input: '//test',
      out: {
        auth: '',
        hash: '',
        host: 'test',
        pathname: '',
        protocol: '',
        search: '',
      },
    },
    {
      input: 'https://test.com',
      out: {
        auth: '',
        hash: '',
        host: 'test.com',
        pathname: '',
        protocol: 'https:',
        search: '',
      },
    },
    {
      input: 'http://test.com?foo=bar',
      out: {
        auth: '',
        hash: '',
        host: 'test.com',
        pathname: '',
        protocol: 'http:',
        search: '?foo=bar',
      },
    },
    {
      input: '/test',
      out: {
        hash: '',
        pathname: '/test',
        search: '',
      },
    },
    {
      input: 'file:///home/user',
      out: {
        auth: '',
        hash: '',
        host: '',
        pathname: '/home/user',
        protocol: 'file:',
        search: '',
      },
    },
    {
      input: 'file:///C:/home/user',
      out: {
        auth: '',
        hash: '',
        host: '',
        pathname: 'C:/home/user',
        protocol: 'file:',
        search: '',
      },
    },
    {
      input: 'https://test.com/t:est',
      out: {
        auth: '',
        hash: '',
        host: 'test.com',
        pathname: '/t:est',
        protocol: 'https:',
        search: '',
      },
    },
    {
      input: String.raw`https://host.name\@foo.bar/meme3.php?url=http://0.0.0.0/2.svg`,
      out: {
        auth: '',
        hash: '',
        host: 'host.name',
        pathname: '/@foo.bar/meme3.php',
        protocol: 'https:',
        search: '?url=http://0.0.0.0/2.svg',
      },
    },
    {
      input: 'javascript:alert(\'hello\')',
      out: {
        protocol: 'javascript:',
        auth: '',
        host: '',
        href: 'javascript:alert(\'hello\')',
        pathname: 'alert(\'hello\')',
        search: '',
        hash: '',
      },
    },
    {
      input: '\0javascrIpt:alert(\'hello\')',
      out: {
        protocol: 'javascript:',
        auth: '',
        host: '',
        href: 'javascrIpt:alert(\'hello\')',
        pathname: 'alert(\'hello\')',
        search: '',
        hash: '',
      },
    },
    {
      input: 'https://domain.test:3000#owo',
      out: {
        protocol: 'https:',
        auth: '',
        host: 'domain.test:3000',
        pathname: '',
        search: '',
        hash: '#owo',
      },
    },
    {
      input: 'Https://domain.test:3000#owo',
      out: {
        protocol: 'https:',
        auth: '',
        host: 'domain.test:3000',
        pathname: '',
        search: '',
        hash: '#owo',
      },
    },
    {
      input: 'data:image/png;base64,aaa//bbbbbb/ccc',
      out: {
        protocol: 'data:',
        auth: '',
        host: '',
        href: 'data:image/png;base64,aaa//bbbbbb/ccc',
        pathname: 'image/png;base64,aaa//bbbbbb/ccc',
        search: '',
        hash: '',
      },
    },
    {
      input: 'blob:https://video_url',
      out: {
        protocol: 'blob:',
        auth: '',
        host: '',
        href: 'blob:https://video_url',
        pathname: 'https://video_url',
        search: '',
        hash: '',
      },
    },
    {
      input: '\0https://invalid.com',
      out: {
        protocol: 'https:',
        auth: '',
        host: 'invalid.com',
        pathname: '',
        search: '',
        hash: '',
      },
    },
    {
      input: '\0javascript:alert(\'hello\')',
      out: {
        protocol: 'javascript:',
        auth: '',
        host: '',
        href: 'javascript:alert(\'hello\')',
        pathname: 'alert(\'hello\')',
        search: '',
        hash: '',
      },
    },
    {
      input: 'https://user:pass@example.com',
      out: {
        protocol: 'https:',
        auth: 'user:pass',
        host: 'example.com',
        pathname: '',
        search: '',
        hash: '',
      },
    },
  ]

  for (const t of tests) {
    it(t.input.toString(), () => {
      expect(structuredClone(parseURL(t.input))).toEqual(t.out)
    })
  }

  it('should work with default protocol', () => {
    expect(parseURL('example.com', 'https://')).toEqual({
      protocol: 'https:',
      auth: '',
      host: 'example.com',
      pathname: '',
      search: '',
      hash: '',
      [protocolRelative]: false,
    })
  })
})
