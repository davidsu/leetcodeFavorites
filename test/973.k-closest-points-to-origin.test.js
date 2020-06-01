const testFuncs = require('../src/973.k-closest-points-to-origin')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(
      testFunc(
        [
          [1, 3],
          [-2, 2]
        ],
        1
      )
    ).toEqual([[-2, 2]])
  })
  it('case 2', () => {
    const result = new Set(
      testFunc(
        [
          [3, 3],
          [5, -1],
          [-2, 4]
        ],
        2
      )
    )
    const expected = new Set([
      [3, 3],
      [-2, 4]
    ])
    expect(result).toEqual(expected)
  })
})
