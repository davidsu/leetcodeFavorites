const testFuncs = require('../src/950.reveal-cards-in-increasing-order.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([17, 13, 11, 2, 3, 5, 7])).toEqual([2, 13, 3, 11, 5, 17, 7])
  })
})
