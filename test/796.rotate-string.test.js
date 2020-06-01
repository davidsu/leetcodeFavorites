const testFuncs = require('../src/796.rotate-string.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abcde', 'cdeab')).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc('abcde', 'abced')).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc('', '')).toEqual(true)
  })
  it('case 4', () => {
    expect(testFunc('a', 'aa')).toEqual(false)
  })
})
