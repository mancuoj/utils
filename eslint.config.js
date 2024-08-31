import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  rules: {
    'unicorn/consistent-function-scoping': 'off',
  },
})
