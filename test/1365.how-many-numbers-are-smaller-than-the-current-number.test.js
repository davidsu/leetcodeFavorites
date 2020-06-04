const testFuncs = require('../src/1365.how-many-numbers-are-smaller-than-the-current-number.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3])
  })
  it('case 2', () => {
    expect(testFunc([6, 5, 4, 8])).toEqual([2, 1, 0, 3])
  })
  it('case 3', () => {
    expect(testFunc([7, 7, 7, 7])).toEqual([0, 0, 0, 0])
  })
})
