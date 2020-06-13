const testFuncs = require('../src/993.cousins-in-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree = { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: null }, right: { val: 3, left: null, right: null } }
    expect(testFunc(
      tree
      , 4, 3)).toEqual(false)
  })
  it('case 2', () => {
    const tree = { val: 1, left: { val: 2, left: null, right: { val: 4, left: null, right: null } }, right: { val: 3, left: null, right: { val: 5, left: null, right: null } } }
    expect(testFunc(tree, 5, 4)).toEqual(true)
  })
  it('case 3', () => {
    const tree = { val: 1, left: { val: 2, left: null, right: { val: 4, left: null, right: null } }, right: { val: 3, left: null, right: null } }
    expect(testFunc(tree, 2, 3)).toEqual(false)
  })
  it('case 4', () => {
    const tree = { val: 1, left: { val: 2, left: null, right: { val: 4, left: null, right: null } }, right: { val: 3, left: null, right: null } }
    expect(testFunc(tree, 4, 3)).toEqual(false)
  })
})
