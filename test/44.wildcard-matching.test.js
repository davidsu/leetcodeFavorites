const testFuncs = require('../src/44.wildcard-matching.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('aa', 'a')).toEqual(false)
  })
  it('case 2', () => {
    expect(testFunc('aa', '*')).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc('cb', '?a')).toEqual(false)
  })
  it('case 4', () => {
    expect(testFunc('adceb', '*a*b')).toEqual(true)
  })
  it('case 5', () => {
    expect(testFunc('acdcb', 'a*c?b')).toEqual(false)
  })
  it('case 6', () => {
    expect(testFunc('', '*')).toEqual(true)
  })
  it('case 7', () => {
    expect(testFunc('', 'a')).toEqual(false)
  })
})
