const testFuncs = require('../src/3.longest-substring-without-repeating-characters.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abcabcbb')).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc('bbbbb')).toEqual(1)
  })
  it('case 3', () => {
    expect(testFunc('pwwkew')).toEqual(3)
  })
  it('case 4', () => {
    expect(testFunc('abba')).toEqual(2)
  })
})
