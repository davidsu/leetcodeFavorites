const testFuncs = require('../src/1209.remove-all-adjacent-duplicates-in-string-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abcd', 2)).toEqual('abcd')
  })
  it('case 2', () => {
    expect(testFunc('deeedbbcccbdaa', 3)).toEqual('aa')
  })
  it('case 3', () => {
    expect(testFunc('pbbcggttciiippooaais', 2)).toEqual('ps')
  })
})
