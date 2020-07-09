const testFuncs = require('../src/662.maximum-width-of-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 0', () => {
    const tree = { val: 0 }
    let node = tree
    for (let i = 0; i < 1801; i++) {
      node.right = { val: 0 }
      node.left = null
      node = tree.right
    }
    node.left = { val: 0, left: null, right: null }
    node.right = { val: 0, left: null, right: null }
    expect(testFunc(tree)).toEqual(2)
  })
  it('case 1', () => {
    expect(testFunc(
      { val: 1, left: { val: 3, left: { val: 5, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: { val: 2, left: null, right: { val: 9, left: null, right: null } } }
    )).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc(
      { val: 1, left: { val: 3, left: { val: 5, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: null }
    )).toEqual(2)
  })
  it('case 3', () => {
    expect(testFunc(
      { val: 1, left: { val: 3, left: { val: 5, left: null, right: null }, right: null }, right: { val: 2, left: null, right: null } }
    )).toEqual(2)
  })
  it('case 4', () => {
    expect(testFunc(
      {
        val: 1,
        left: { val: 3, left: { val: 5, left: { val: 6, left: null, right: null }, right: null }, right: null },
        right: { val: 2, left: null, right: { val: 9, left: null, right: { val: 7, left: null, right: null } } }
      }
    )).toEqual(8)
  })
})
