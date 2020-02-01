const { testFunc } = require('../src/144.binary-tree-preorder-traversal.js')
describe('144.binary-tree-preorder-traversal', () => {
    it('should ...', () => {
        const tree = { val: 1, right: { val: 2, right: null, left: { val: 3, right: null, left: null } }, left: null }
        expect(testFunc(tree)).toEqual([1, 2, 3])
    })
})
