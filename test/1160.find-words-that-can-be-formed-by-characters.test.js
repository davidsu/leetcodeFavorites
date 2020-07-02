const testFuncs = require('../src/1160.find-words-that-can-be-formed-by-characters.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['cat', 'bt', 'hat', 'tree'], 'atach')).toEqual(6)
  })
  it('case 2', () => {
    expect(testFunc(['hello', 'world', 'leetcode'], 'welldonehoneyr')).toEqual(10)
  })
})
