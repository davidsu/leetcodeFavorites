const testFuncs = require('../src/119.pascals-triangle-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3)).toEqual([1, 3, 3, 1])
  })
  it('case 2', () => {
    expect(testFunc(9)).toEqual([1, 9, 36, 84, 126, 126, 84, 36, 9, 1])
  })
})
