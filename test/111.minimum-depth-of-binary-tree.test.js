const testFuncs = require('../src/111.minimum-depth-of-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }

    )).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc(
      { val: 1, left: { val: 2, left: null, right: null }, right: null }
    )).toEqual(2)
  })
})
