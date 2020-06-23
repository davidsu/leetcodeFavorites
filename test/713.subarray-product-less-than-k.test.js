const testFuncs = require('../src/713.subarray-product-less-than-k.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([10, 5, 2, 6], 100)).toEqual(8)
  })
  it('case 2', () => {
    expect(testFunc([2, 2, 2, 100, 1, 1], 100)).toEqual(9)
  })
})
