const testFuncs = require('../src/210.course-schedule-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(2, [[1, 0]])).toEqual([0, 1])
  })
  it('case 2', () => {
    expect(testFunc(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toEqual([0, 1, 2, 3])
  })
  it('case 3', () => {
    expect(testFunc(7, [[1, 0], [0, 3], [0, 2], [3, 2], [2, 5], [4, 5], [5, 6], [2, 4]])).toEqual([6, 5, 4, 2, 3, 0, 1])
  })
})
