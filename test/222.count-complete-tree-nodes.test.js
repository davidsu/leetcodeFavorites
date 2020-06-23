const testFuncs = require('../src/222.count-complete-tree-nodes.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } }, right: { val: 3, left: { val: 6, left: null, right: null }, right: null } }
    )).toEqual(6)
  })
  it('case 2', () => {
    expect(testFunc({ val: 1 })).toEqual(1)
  })
})
