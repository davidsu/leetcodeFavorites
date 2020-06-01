const testFuncs = require('../src/437.path-sum-iii.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const tree = {
      val: 10,
      right: { val: -3, right: { val: 11, right: null, left: null }, left: null },
      left: {
        val: 5,
        right: { val: 2, right: { val: 1, right: null, left: null }, left: null },
        left: { val: 3, right: { val: -2, right: null, left: null }, left: { val: 3, right: null, left: null } }
      }
    }
    expect(testFunc(tree, 8)).toEqual(3)
  })
})
