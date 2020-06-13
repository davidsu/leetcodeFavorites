const testFuncs = require('../src/700.search-in-a-binary-search-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree = { val: 4, left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: { val: 7, left: null, right: null } }

    const result = testFunc(tree, 2)
    const expected = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    }
    expect(result).toEqual(expected)
  })
})
