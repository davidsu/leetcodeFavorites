const testFuncs = require('../src/406.queue-reconstruction-by-height.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])).toEqual([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]])
  })
})
