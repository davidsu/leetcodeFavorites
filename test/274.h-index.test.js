const testFuncs = require('../src/274.h-index.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([3, 0, 6, 1, 5])).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc([1])).toBe(1)
  })
})
