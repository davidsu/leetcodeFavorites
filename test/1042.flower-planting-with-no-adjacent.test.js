const testFuncs = require('../src/1042.flower-planting-with-no-adjacent.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  function isValid (paths, result) {
    for (const [src, dst] of paths) {
      if (!result[src - 1] || result[src - 1] === result[dst - 1]) {
        return false
      }
    }
    return true
  }
  it('case 1', () => {
    const N = 3
    const paths = [[1, 2], [2, 3], [3, 1]]
    const result = testFunc(N, paths)
    expect(isValid(paths, result)).toEqual(true)
  })
  it('case 2', () => {
    const N = 4
    const paths = [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]]
    const result = testFunc(N, paths)
    expect(isValid(paths, result)).toEqual(true)
  })
  it('case 3', () => {
    const N = 4
    const paths = [[1, 2], [3, 4]]
    const result = testFunc(N, paths)
    expect(isValid(paths, result)).toEqual(true)
  })
})
