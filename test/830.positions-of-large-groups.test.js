const testFuncs = require('../src/830.positions-of-large-groups.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abbxxxxzzy')).toEqual([[3, 6]])
  })
  it('case 2', () => {
    expect(testFunc('abc')).toEqual([])
  })
  it('case 3', () => {
    expect(testFunc('abcdddeeeeaabbbcd')).toEqual([[3, 5], [6, 9], [12, 14]])
  })
})
