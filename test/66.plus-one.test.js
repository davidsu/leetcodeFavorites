const testFuncs = require('../src/66.plus-one.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3])).toEqual([1, 2, 4])
  })
  it('case 2', () => {
    expect(testFunc([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  })
  it('case 3', () => {
    expect(testFunc([9])).toEqual([1, 0])
  })
})
