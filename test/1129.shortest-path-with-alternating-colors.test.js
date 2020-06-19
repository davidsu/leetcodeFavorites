/* eslint-disable camelcase */
const testFuncs = require('../src/1129.shortest-path-with-alternating-colors.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const n = 3
    const red_edges = [[0, 1], [1, 2]]
    const blue_edges = []
    expect(testFunc(n, red_edges, blue_edges)).toEqual([0, 1, -1])
  })
  it('case 2', () => {
    const n = 3
    const red_edges = [[0, 1]]
    const blue_edges = [[2, 1]]
    expect(testFunc(n, red_edges, blue_edges)).toEqual([0, 1, -1])
  })
  it('case 3', () => {
    const n = 3
    const red_edges = [[1, 0]]
    const blue_edges = [[2, 1]]
    expect(testFunc(n, red_edges, blue_edges)).toEqual([0, -1, -1])
  })
  it('case 4', () => {
    const n = 3
    const red_edges = [[0, 1]]
    const blue_edges = [[1, 2]]
    expect(testFunc(n, red_edges, blue_edges)).toEqual([0, 1, 2])
  })
  it('case 5', () => {
    const n = 3
    const red_edges = [[0, 1], [0, 2]]
    const blue_edges = [[1, 0]]
    expect(testFunc(n, red_edges, blue_edges)).toEqual([0, 1, 1])
  })
})
