const testFuncs = require('../src/345.reverse-vowels-of-a-string.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('hello')).toEqual('holle')
  })
  it('case 2', () => {
    expect(testFunc('leetcode')).toEqual('leotcede')
  })
})
