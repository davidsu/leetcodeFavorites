const testFuncs = require('../src/684.redundant-connection.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2], [1, 3], [2, 3]])).toEqual([2, 3])
  })
  it('case 2', () => {
    expect(testFunc([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])).toEqual([1, 4])
  })
  it('case 3', () => {
    expect(testFunc([[3, 4], [1, 2], [2, 4], [3, 5], [2, 5]])).toEqual([2, 5])
  })
  it('case 4', () => {
    expect(testFunc([[1, 5], [3, 4], [3, 5], [4, 5], [2, 4]])).toEqual([4, 5])
  })
})
