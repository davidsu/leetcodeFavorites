const testFuncs = require('../src/541.reverse-string-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abcdefg', 2)).toEqual('bacdfeg')
  })
})
