const testFuncs = require('../src/965.univalued-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree = { val: 1, left: { val: 1, left: { val: 1, left: null, right: null }, right: { val: 1, left: null, right: null } }, right: { val: 1, left: null, right: { val: 1, left: null, right: null } } }
    expect(testFunc(tree)).toEqual(true)
  })
  it('test 2', () => {
    const tree = { val: 2, left: { val: 2, left: { val: 5, left: null, right: null }, right: { val: 2, left: null, right: null } }, right: { val: 2, left: null, right: null } }
    expect(testFunc(tree)).toEqual(false)
  })
})
