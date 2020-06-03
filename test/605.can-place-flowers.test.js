const testFuncs = require('../src/605.can-place-flowers.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 0, 0, 0, 1], 2)).toEqual(false)
  })
  it('case 2', () => {
    expect(testFunc([1, 0, 0, 0, 1], 1)).toEqual(true)
  })
})
