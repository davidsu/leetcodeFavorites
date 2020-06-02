const testFuncs = require('../src/1337.the-k-weakest-rows-in-a-matrix.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      [[1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]],
      3
    )).toEqual([2, 0, 3])
  })
  it('case 2', () => {
    expect(testFunc(
      [[1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0]],
      2
    )).toEqual([0, 2])
  })
})
