const testFuncs = require('../src/958.check-completeness-of-a-binary-tree.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } }, right: { val: 3, left: { val: 6, left: null, right: null }, right: null } }
    )).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc(
      { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } }, right: { val: 3, left: null, right: { val: 7, left: null, right: null } } }
    )).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc(
      { val: 1, left: { val: 2, left: { val: 4, left: { val: 8, left: { val: 15, left: null, right: null }, right: null }, right: { val: 9, left: null, right: null } }, right: { val: 5, left: { val: 10, left: null, right: null }, right: { val: 11, left: null, right: null } } }, right: { val: 3, left: { val: 6, left: { val: 12, left: null, right: null }, right: { val: 13, left: null, right: null } }, right: { val: 7, left: null, right: null } } }
    )).toEqual(false)
  })
})
