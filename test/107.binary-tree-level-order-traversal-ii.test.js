const testFuncs = require('../src/107.binary-tree-level-order-traversal-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree =
            { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }
    expect(testFunc(tree)).toEqual(
      [
        [15, 7],
        [9, 20],
        [3]
      ]

    )
  })
})
