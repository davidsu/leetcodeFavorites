const testFuncs = require('../src/785.is-graph-bipartite.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 3], [0, 2], [1, 3], [0, 2]])).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])).toEqual(false)
  })
})
