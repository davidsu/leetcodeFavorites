const testFuncs = require('../src/859.buddy-strings.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('ab', 'ba')).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc('aa', 'aa')).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc('ab', 'ab')).toBe(false)
  })
  it('case 4', () => {
    const A = 'aaaaaaabc'; const B = 'aaaaaaacb'
    expect(testFunc(A, B)).toBe(true)
  })
  it('case 5', () => {
    expect(testFunc('abac', 'abad')).toBe(false)
  })
  it('case 6', () => {
    expect(testFunc('abcaa', 'abcbb')).toEqual(false)
  })
})
