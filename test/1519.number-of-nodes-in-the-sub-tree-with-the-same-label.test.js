const testFuncs = require('../src/1519.number-of-nodes-in-the-sub-tree-with-the-same-label.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const n = 7; const edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]]; const labels = 'abaedcd'
    expect(testFunc(n, edges, labels)).toEqual([2, 1, 1, 1, 1, 1, 1])
  })
  it('case 2', () => {
    const n = 4; const edges = [[0, 1], [1, 2], [0, 3]]; const labels = 'bbbb'
    expect(testFunc(n, edges, labels)).toEqual([4, 2, 1, 1])
  })
  it('case 3', () => {
    const n = 5; const edges = [[0, 1], [0, 2], [1, 3], [0, 4]]; const labels = 'aabab'
    expect(testFunc(n, edges, labels)).toEqual([3, 2, 1, 1, 1])
  })
  it('case 4', () => {
    const n = 4; const edges = [[0, 2], [0, 3], [1, 2]]; const labels = 'aeed'
    expect(testFunc(n, edges, labels)).toEqual([1, 1, 2, 1])
  })
})
