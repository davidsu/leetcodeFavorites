const testFuncs = require('../src/287.find-the-duplicate-number.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 3, 4, 2, 2])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([3, 1, 3, 4, 2])).toEqual(3)
  })
})
