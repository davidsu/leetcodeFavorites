const testFuncs = require('../src/941.valid-mountain-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 1])).toEqual(false)
  })
  it('case 2', () => {
    expect(testFunc([3, 5, 5])).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc([0, 3, 2, 1])).toEqual(true)
  })
})
