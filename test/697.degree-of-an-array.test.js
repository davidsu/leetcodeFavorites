const testFuncs = require('../src/697.degree-of-an-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 2, 3, 1])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([1, 2, 2, 3, 1, 4, 2])).toEqual(6)
  })
})
