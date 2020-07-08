const testFuncs = require('../src/983.minimum-cost-for-tickets.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const days = [1, 4, 6, 7, 8, 20]; const costs = [2, 7, 15]
    expect(testFunc(days, costs)).toEqual(11)
  })
  it('case 2', () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]; const costs = [2, 7, 15]
    expect(testFunc(days, costs)).toEqual(17)
  })
})
