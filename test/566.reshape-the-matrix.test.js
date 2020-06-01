const testFuncs = require('../src/566.reshape-the-matrix.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(
      testFunc(
        [
          [1, 2],
          [3, 4]
        ],
        1,
        4
      )
    ).toEqual([[1, 2, 3, 4]])
  })
  it('case 2', () => {
    expect(
      testFunc(
        [
          [1, 2],
          [3, 4]
        ],
        2,
        4
      )
    ).toEqual([
      [1, 2],
      [3, 4]
    ])
  })
})
