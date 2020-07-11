const testFuncs = require('../src/1048.longest-string-chain.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])).toEqual(4)
  })
})
