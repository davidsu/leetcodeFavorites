const testFuncs = require('../src/1260.shift-2d-grid.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)).toEqual([[9, 1, 2], [3, 4, 5], [6, 7, 8]])
  })
  it('case 2', () => {
    expect(testFunc([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4)).toEqual([[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]])
  })
  it('case 3', () => {
    expect(testFunc([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  })
  it('case 4', () => {
    expect(testFunc([[1], [2], [3], [4], [7], [6], [5]], 23)).toEqual([[6], [5], [1], [2], [3], [4], [7]])
  })
})
