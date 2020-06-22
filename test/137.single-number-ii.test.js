const testFuncs = require('../src/137.single-number-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 2, 3, 2])).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc([0, 1, 0, 1, 0, 1, 99])).toEqual(99)
  })
  it('case 3', () => {
    expect(testFunc([5, 5, 5, 16, 16, 16, 15])).toEqual(15)
  })
  it('case 4', () => {
    expect(testFunc([5, 5, 5, 21, 21, 21, 15])).toEqual(15)
  })
  it('case 5', () => {
    expect(testFunc([-1, -1, -1, -2])).toEqual(-2)
  })
})
