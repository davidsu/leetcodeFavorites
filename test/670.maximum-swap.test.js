const testFuncs = require('../src/670.maximum-swap.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(2736)).toEqual(7236)
  })
  it('case 2', () => {
    expect(testFunc(9973)).toBe(9973)
  })
  it('case 3', () => {
    expect(testFunc(98368)).toBe(98863)
  })
  it('case 4', () => {
    expect(testFunc(1993)).toBe(9913)
  })
})
