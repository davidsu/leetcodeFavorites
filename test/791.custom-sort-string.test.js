const testFuncs = require('../src/791.custom-sort-string.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('cba', 'abcd')).toEqual('cbad')
  })
})
