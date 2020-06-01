const testFuncs = require('../src/125.valid-palindrome.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('A_ man, a plan, a canal: Panama')).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc('A_ man, a plan, a canal: Panama')).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc('race a car')).toEqual(false)
  })
})
