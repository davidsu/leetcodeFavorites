const testFuncs = require('../src/1281.subtract-the-product-and-sum-of-digits-of-an-integer.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(234)).toEqual(15)
  })
  it('case 2', () => {
    expect(testFunc(4421)).toEqual(21)
  })
})
