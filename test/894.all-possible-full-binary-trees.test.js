const testFuncs = require('../src/894.all-possible-full-binary-trees.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3)).toEqual([{
      val: 0,
      left: { val: 0, left: null, right: null },
      right: { val: 0, left: null, right: null }
    }])
  })
})
