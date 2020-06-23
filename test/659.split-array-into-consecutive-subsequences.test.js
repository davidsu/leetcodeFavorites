const testFuncs = require('../src/659.split-array-into-consecutive-subsequences.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3, 3, 4, 5])).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc([1, 2, 3, 3, 4, 4, 5, 5])).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc([1, 2, 3, 4, 4, 5])).toEqual(false)
  })
  it('case 4', () => {
    expect(testFunc([1, 2, 3, 3, 4, 4, 5])).toEqual(true)
  })
})
