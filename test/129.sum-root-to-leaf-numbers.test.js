const testFuncs = require('../src/129.sum-root-to-leaf-numbers.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }
    )).toEqual(25)
  })
  it('case 2', () => {
    expect(testFunc(
      { val: 4, left: { val: 9, left: { val: 5, left: null, right: null }, right: { val: 1, left: null, right: null } }, right: { val: 0, left: null, right: null } }
    )).toEqual(1026)
  })
})
