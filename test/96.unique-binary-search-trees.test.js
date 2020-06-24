const testFuncs = require('../src/96.unique-binary-search-trees.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3)).toEqual(5)
  })
  it('case 2', () => {
    expect(testFunc(4)).toEqual(14)
  })
  it('case 3', () => {
    expect(testFunc(5)).toEqual(42)
  })
  it('case 4', () => {
    expect(testFunc(6)).toEqual(132)
  })
})
