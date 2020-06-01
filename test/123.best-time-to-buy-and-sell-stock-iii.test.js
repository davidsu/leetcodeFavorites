const testFuncs = require('../src/123.best-time-to-buy-and-sell-stock-iii.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([3, 3, 5, 0, 0, 3, 1, 4])).toEqual(6)
  })

  it('case 2', () => {
    expect(testFunc([1, 2, 3, 4, 5])).toEqual(4)
  })
  it('case 3', () => {
    expect(testFunc([7, 6, 4, 3, 1])).toEqual(0)
  })
  it('case 4', () => {
    expect(testFunc([1, 4, 2])).toEqual(3)
  })
})
