const testFuncs = require('../src/1394.find-lucky-integer-in-an-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 2, 3, 4])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([1, 2, 2, 3, 3, 3])).toEqual(3)
  })
  it('case 3', () => {
    expect(testFunc([2, 2, 2, 3, 3])).toEqual(-1)
  })
  it('case 4', () => {
    expect(testFunc([5])).toEqual(-1)
  })
  it('case 5', () => {
    expect(testFunc([7, 7, 7, 7, 7, 7, 7])).toEqual(7)
  })
})
