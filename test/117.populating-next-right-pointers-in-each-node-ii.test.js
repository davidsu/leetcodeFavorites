const testFuncs = require('../src/117.populating-next-right-pointers-in-each-node-ii.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const input = {
      val: 1,
      left: { val: 2, left: { val: 4, left: null, right: null, next: null }, right: { val: 5, left: null, right: null, next: null }, next: null },
      right: { val: 3, left: null, right: { val: 7, left: null, right: null, next: null }, next: null },
      next: null
    }
    const expected = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null, next: { val: 5, left: null, right: null, next: { val: 7, left: null, right: null, next: null } } },
        right: { val: 5, left: null, right: null, next: { val: 7, left: null, right: null, next: null } },
        next: { val: 3, left: null, right: { val: 7, left: null, right: null, next: null }, next: null }
      },
      right: { val: 3, left: null, right: { val: 7, left: null, right: null, next: null }, next: null },
      next: null
    }
    const result = testFunc(input)
    expect(result).toEqual(expected)
  })
})
