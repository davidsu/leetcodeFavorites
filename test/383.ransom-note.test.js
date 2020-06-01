const testFuncs = require('../src/383.ransom-note.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('a', 'b')).toEqual(false)
  })
  it('case 2', () => {
    expect(testFunc('aa', 'ab')).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc('aa', 'aab')).toEqual(true)
  })
})
