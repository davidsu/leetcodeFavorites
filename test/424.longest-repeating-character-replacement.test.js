const testFuncs = require('../src/424.longest-repeating-character-replacement.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('ABAB', 2)).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc('AABABBA', 1)).toEqual(4)
  })
})
