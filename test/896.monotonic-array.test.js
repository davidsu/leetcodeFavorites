const testFuncs = require('../src/896.monotonic-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 2, 3])).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc([6, 6, 6, 5, 4, 4])).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc([1, 1, 1])).toEqual(true)
  })
  it('case 4', () => {
    expect(testFunc([1, 3, 2])).toEqual(false)
  })
})
