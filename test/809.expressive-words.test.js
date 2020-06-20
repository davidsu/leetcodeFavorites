const testFuncs = require('../src/809.expressive-words.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('heeellooo', ['hello', 'hi', 'helo'])).toEqual(1)
  })
  it('case 1', () => {
    expect(testFunc('aaa', ['aaaa'])).toEqual(0)
  })
})
