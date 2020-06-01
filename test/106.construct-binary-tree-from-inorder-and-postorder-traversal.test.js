const testFuncs = require('../src/106.construct-binary-tree-from-inorder-and-postorder-traversal.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const result = testFunc([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
    expect(result).toEqual({
      val: 3,
      right: { val: 20, right: { val: 7, right: null, left: null }, left: { val: 15, right: null, left: null } },
      left: { val: 9, right: null, left: null }
    })
  })
  it('case 2', () => {
    expect(testFunc([9, 3, 15], [9, 15, 3])).toEqual({
      left: { left: null, right: null, val: 9 },
      right: { left: null, right: null, val: 15 },
      val: 3
    })
  })
})
