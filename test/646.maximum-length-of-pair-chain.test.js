const testFuncs = require('../src/646.maximum-length-of-pair-chain.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2], [2, 3], [3, 4]])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([[1, 5], [2, 3], [4, 5], [5, 6], [7, 8]])).toEqual(3)
  })
  it('case 3', () => {
    expect(testFunc([[-1, 1], [-2, 7], [-5, 8], [-3, 8], [1, 3], [-2, 9], [-5, 2]]
    )).toEqual(1)
  })
})
