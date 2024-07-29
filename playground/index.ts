/* eslint-disable no-console */
import { clsx, gcd, getWords, startCase } from '@mancuoj/utils'

console.log(clsx('foo', 'bar', { hello: 1, world: true }))
console.log(getWords('hello_world-fooBarBazHTTP123'))
console.log(startCase('hello_world-fooBarBazHTTP123'))
console.log(gcd(48, 18))
