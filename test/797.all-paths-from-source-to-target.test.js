const testFuncs = require('../src/797.all-paths-from-source-to-target.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2], [3], [3], []])).toEqual([[0, 1, 3], [0, 2, 3]])
  })
})
