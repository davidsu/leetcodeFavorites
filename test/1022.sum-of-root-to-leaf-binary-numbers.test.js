const testFuncs = require('../src/1022.sum-of-root-to-leaf-binary-numbers.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(
      { val: 1, left: { val: 0, left: { val: 0, left: null, right: null }, right: { val: 1, left: null, right: null } }, right: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 1, left: null, right: null } } }
    )).toEqual(22)
  })
})
