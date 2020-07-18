const testFuncs = require('../src/754.reach-a-number.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3)).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc(2)).toBe(3)
  })
  it('case 3', () => {
    expect(testFunc(7)).toBe(5)
  })
})
