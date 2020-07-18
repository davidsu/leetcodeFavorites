const testFuncs = require('../src/436.find-right-interval.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2]])).toEqual([-1])
  })
  it('case 2', () => {
    expect(testFunc([[3, 4], [2, 3], [1, 2]])).toEqual([-1, 0, 1])
  })
  it('case 3', () => {
    expect(testFunc([[1, 4], [2, 3], [3, 4]])).toEqual([-1, 2, -1])
  })
})
