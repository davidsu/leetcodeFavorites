const testFuncs = require('../src/944.delete-columns-to-make-sorted.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['cba', 'daf', 'ghi'])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc(['a', 'b'])).toEqual(0)
  })
  it('case 3', () => {
    expect(testFunc(['zyx', 'wvu', 'tsr'])).toEqual(3)
  })
})
