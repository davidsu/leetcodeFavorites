const testFuncs = require('../src/414.third-maximum-number.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([3, 2, 1])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([1, 2])).toEqual(2)
  })
  it('case 3', () => {
    expect(testFunc([2, 2, 3, 1])).toEqual(1)
  })
})
