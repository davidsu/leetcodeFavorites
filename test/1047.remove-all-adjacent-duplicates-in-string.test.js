const testFuncs = require('../src/1047.remove-all-adjacent-duplicates-in-string.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abbaca')).toEqual('ca')
  })
  it('case 2', () => {
    expect(testFunc('aaaaaaaaa')).toEqual('a')
  })
})
