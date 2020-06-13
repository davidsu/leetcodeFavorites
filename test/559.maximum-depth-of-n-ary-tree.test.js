const testFuncs = require('../src/559.maximum-depth-of-n-ary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree = { val: 1, children: [{ val: 3, children: [{ val: 5, children: [] }, { val: 6, children: [] }] }, { val: 2, children: [] }, { val: 4, children: [] }] }
    expect(testFunc(tree)).toEqual(3)
  })
  it('case 2', () => {
    const tree = { val: 1, children: [{ val: 2, children: [] }, { val: 3, children: [{ val: 6, children: [] }, { val: 7, children: [{ val: 11, children: [{ val: 14, children: [] }] }] }] }, { val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] }, { val: 5, children: [{ val: 9, children: [{ val: 13, children: [] }] }, { val: 10, children: [] }] }] }

    expect(testFunc(tree)).toEqual(5)
  })
})
