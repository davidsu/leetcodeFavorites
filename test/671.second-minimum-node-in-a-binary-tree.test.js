const testFuncs = require('../src/671.second-minimum-node-in-a-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 2, left: { val: 2, left: null, right: null }, right: { val: 5, left: { val: 5, left: null, right: null }, right: { val: 7, left: null, right: null } } }

    )).toEqual(5)
  })
  it('case 2', () => {
    expect(testFunc(
      { val: 1, left: { val: 1, left: { val: 1, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } }, right: { val: 1, left: null, right: null } }, right: { val: 3, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } } }
    )).toEqual(3)
  })
})
