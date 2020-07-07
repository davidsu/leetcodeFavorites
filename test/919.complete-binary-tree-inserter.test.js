const testFuncs = require('../src/919.complete-binary-tree-inserter.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, TestFunc) => {
  it('case 1', () => {
    const tree = new TestFunc({ val: 1, left: null, right: null })
    expect(tree.insert(2)).toEqual(1)
    expect(tree.insert(3)).toEqual(1)
    expect(tree.insert(4)).toEqual(2)

    expect(tree.get_root()).toEqual({ val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: null }, right: { val: 3, left: null, right: null } })
  })
})
