const testFuncs = require('../src/987.vertical-order-traversal-of-a-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }
    )).toEqual([[9], [3, 15], [20], [7]])
  })
  it('case 2', () => {
    expect(testFunc(
      { val: 0, left: { val: 1, left: null, right: { val: 2, left: { val: 6, left: null, right: null }, right: { val: 3, left: null, right: { val: 4, left: null, right: { val: 5, left: null, right: null } } } } }, right: null }
    )).toEqual([[1, 6], [0, 2], [3], [4], [5]])
  })
  it('case 3', () => {
    expect(testFunc(
      { val: 0, left: { val: 8, left: null, right: null }, right: { val: 1, left: { val: 3, left: null, right: { val: 4, left: null, right: { val: 7, left: null, right: null } } }, right: { val: 2, left: { val: 5, left: { val: 6, left: null, right: null }, right: null }, right: null } } }
    )).toEqual([[8], [0, 3, 6], [1, 4, 5], [2, 7]])
  })
  it('case 4', () => {
    expect(testFunc(
      { val: 0, left: { val: 8, left: null, right: null }, right: { val: 1, left: { val: 3, left: null, right: { val: 4, left: null, right: { val: 7, left: null, right: null } } }, right: { val: 2, left: { val: 5, left: { val: 6, left: null, right: null }, right: null }, right: null } } }
    )).toEqual([[8], [0, 3, 6], [1, 4, 5], [2, 7]])
  })
})
