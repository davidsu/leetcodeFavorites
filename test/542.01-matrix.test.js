const testFuncs = require('../src/542.01-matrix.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const Input =
[[0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]]

    const Output =
[[0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]]

    expect(testFunc(Input)).toEqual(Output)
  })
  it('case 2', () => {
    const Input =
[[0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]]

    const Output =
[[0, 0, 0],
  [0, 1, 0],
  [1, 2, 1]]
    expect(testFunc(Input)).toEqual(Output)
  })
  it('case 3', () => {
    const Input = [[1], [1], [1], [1], [1], [0], [1]]
    const Output = [[5], [4], [3], [2], [1], [0], [1]]
    expect(testFunc(Input)).toEqual(Output)
  })
})
