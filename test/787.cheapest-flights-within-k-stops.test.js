const testFuncs = require('../src/787.cheapest-flights-within-k-stops.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const n = 3
    const edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
    const src = 0
    const dst = 2
    const k = 1
    expect(testFunc(n, edges, src, dst, k)).toEqual(200)
  })
  it('case 2', () => {
    const n = 3
    const edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
    const src = 0
    const dst = 2
    const k = 0
    expect(testFunc(n, edges, src, dst, k)).toEqual(500)
  })
})
