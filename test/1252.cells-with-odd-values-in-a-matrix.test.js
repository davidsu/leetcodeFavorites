const testFuncs = require('../src/1252.cells-with-odd-values-in-a-matrix.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const n = 2
    const m = 3
    const indices = [[0, 1], [1, 1]]
    expect(testFunc(n, m, indices)).toEqual(6)
  })
  it('case 2', () => {
    const n = 2
    const m = 2
    const indices = [[1, 1], [0, 0]]
    expect(testFunc(n, m, indices)).toEqual(0)
  })
})
