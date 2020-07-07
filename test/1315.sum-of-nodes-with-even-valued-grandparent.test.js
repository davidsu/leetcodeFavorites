const testFuncs = require('../src/1315.sum-of-nodes-with-even-valued-grandparent.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 6, left: { val: 7, left: { val: 2, left: { val: 9, left: null, right: null }, right: null }, right: { val: 7, left: { val: 1, left: null, right: null }, right: { val: 4, left: null, right: null } } }, right: { val: 8, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: { val: 5, left: null, right: null } } } }
    )).toEqual(18)
  })
})
