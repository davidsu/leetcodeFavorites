const testFuncs = require('../src/652.find-duplicate-subtrees.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const result = testFunc(
      { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: null }, right: { val: 3, left: { val: 2, left: { val: 4, left: null, right: null }, right: null }, right: { val: 4, left: null, right: null } } }
    )
    expect(result).toEqual(expect.arrayContaining([
      { val: 2, left: { val: 4, left: null, right: null }, right: null },
      { val: 4, left: null, right: null }
    ]))
    expect(result.length).toBe(2)
  })
})
