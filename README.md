# @mancuoj/utils

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![coverage][codecov-src]][codecov-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Opinionated collection of common JavaScript / TypeScript utils by [@mancuoj](https://github.com/mancuoj).

- Everyday utility functions with modern implementations
- Fully typed - with TSDocs
- Ships ESM and CJS bundles
- Battle-tested with 100% test coverage

## Examples

```ts
import { clsx, getWords } from '@mancuoj/utils'

clsx('hello', { world: 1, push: true, force: null })
// 'hello world push'

getWords('camelCase_snake_case-kebabCase')
// [ "camel", "Case", "snake", "case", "kebab", "Case" ]
```

## Credits

- [@antfu](https://github.com/antfu)
- [@sindresorhus](https://github.com/sindresorhus)
- [es-toolkit](https://github.com/toss/es-toolkit)

## License

[MIT](https://github.com/mancuoj/@mancuoj/utils/blob/main/LICENSE) License © 2024-PRESENT [Mancuoj](https://github.com/mancuoj)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@mancuoj/utils?style=flat&colorA=18181b&colorB=1f6feb
[npm-version-href]: https://npmjs.com/package/@mancuoj/utils
[npm-downloads-src]: https://img.shields.io/npm/dm/@mancuoj/utils?style=flat&colorA=18181b&colorB=1f6feb
[npm-downloads-href]: https://npmjs.com/package/@mancuoj/utils
[codecov-src]: https://img.shields.io/codecov/c/gh/mancuoj/utils/main?style=flat&colorA=18181b&colorB=1f6feb
[codecov-href]: https://codecov.io/gh/mancuoj/utils
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@mancuoj/utils?style=flat&colorA=18181b&colorB=1f6feb&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@mancuoj/utils
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-18181b?style=flat&colorA=18181b&colorB=1f6feb
[jsdocs-href]: https://www.jsdocs.io/package/@mancuoj/utils
[license-src]: https://img.shields.io/github/license/mancuoj/utils.svg?style=flat&colorA=18181b&colorB=1f6feb
[license-href]: https://github.com/mancuoj/utils/blob/main/LICENSE
