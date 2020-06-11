const testFuncs = require('../src/75.sort-colors.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2])
  })
})
