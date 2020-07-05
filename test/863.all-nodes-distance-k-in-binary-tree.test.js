const testFuncs = require('../src/863.all-nodes-distance-k-in-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const target = { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: { val: 7, left: null, right: null }, right: { val: 4, left: null, right: null } } }
    const tree = { val: 3, left: target, right: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 8, left: null, right: null } } }
    expect(testFunc(tree, target, 2).sort((a, b) => b - a)).toEqual([7, 4, 1])
  })
})
