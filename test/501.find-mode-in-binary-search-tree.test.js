const testFuncs = require('../src/501.find-mode-in-binary-search-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree = { val: 1, left: null, right: { val: 2, left: { val: 2, left: null, right: null }, right: null } }

    expect(testFunc(tree)).toEqual([2])
  })
})
