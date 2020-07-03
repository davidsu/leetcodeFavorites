const testFuncs = require('../src/957.prison-cells-after-n-days.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([0, 1, 0, 1, 1, 0, 0, 1], 7)).toEqual([0, 0, 1, 1, 0, 0, 0, 0])
  })
  it('case 2', () => {
    expect(testFunc([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)).toEqual([0, 0, 1, 1, 1, 1, 1, 0])
  })
})
