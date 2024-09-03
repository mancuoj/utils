import { parsePath } from './parse-path'

describe('parsePath', () => {
  it('should parse path', () => {
    expect(parsePath('')).toEqual({
      pathname: '',
      search: '',
      hash: '',
    })

    expect(parsePath('www.example.com/pathname?search#hash')).toEqual({
      pathname: 'www.example.com/pathname',
      search: '?search',
      hash: '#hash',
    })

    expect(parsePath('pathname')).toEqual({
      pathname: 'pathname',
      search: '',
      hash: '',
    })

    expect(parsePath('?search')).toEqual({
      pathname: '',
      search: '?search',
      hash: '',
    })

    expect(parsePath('#hash')).toEqual({
      pathname: '',
      search: '',
      hash: '#hash',
    })

    expect(parsePath('pathname?search')).toEqual({
      pathname: 'pathname',
      search: '?search',
      hash: '',
    })

    expect(parsePath('pathname#hash')).toEqual({
      pathname: 'pathname',
      search: '',
      hash: '#hash',
    })

    expect(parsePath('?search#hash')).toEqual({
      pathname: '',
      search: '?search',
      hash: '#hash',
    })
  })
})
