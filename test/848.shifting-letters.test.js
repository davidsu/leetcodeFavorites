const testFuncs = require('../src/848.shifting-letters.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abc', [3, 5, 9])).toEqual('rpl')
  })
})
