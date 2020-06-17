const testFuncs = require('../src/1299.replace-elements-with-greatest-element-on-right-side.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1])
  })
})
