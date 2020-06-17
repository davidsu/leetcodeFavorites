const testFuncs = require('../src/1464.maximum-product-of-two-elements-in-an-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([3, 4, 5, 2])).toEqual(12)
  })
  it('case 2', () => {
    expect(testFunc([1, 5, 4, 5])).toEqual(16)
  })
  it('case 4', () => {
    expect(testFunc([3, 7])).toEqual(12)
  })
})
