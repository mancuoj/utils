import { titleCase } from './title-case'

describe('titleCase', () => {
  it.each([
    ['', ''],
    ['f', 'F'],
    ['foo', 'Foo'],
    ['foo-bar', 'Foo Bar'],
    ['this-IS-aTitle', 'This is a Title'],
    ['the-quick-brown-fox-jumps-over-the-lazy-dog', 'The Quick Brown Fox Jumps Over the Lazy Dog'],
    ['a-tale-of-two-cities', 'A Tale of Two Cities'],
    ['the-wind-in-the-willows', 'The Wind in the Willows'],
    ['a-journey-to-the-center-of-the-earth', 'A Journey to the Center of the Earth'],
    ['the-old-man-and-the-sea', 'The Old Man and the Sea'],
    ['the-lord-of-the-rings', 'The Lord of the Rings'],
    ['the-hobbit', 'The Hobbit'],
    ['the-catcher-in-the-rye', 'The Catcher in the Rye'],
    ['the-great-gatsby', 'The Great Gatsby'],
  ])('%s => %s', (input, expected) => {
    expect(titleCase(input)).toBe(expected)
  })
})
