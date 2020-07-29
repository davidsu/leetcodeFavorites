const testFuncs = require('../src/309.best-time-to-buy-and-sell-stock-with-cooldown.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3, 0, 2])).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc([2, 1, 4, 5, 2, 9, 7])).toBe(10)
  })
})
