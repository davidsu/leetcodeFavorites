const testFuncs = require('../src/392.is-subsequence.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const s = 'abc'
    const t = 'ahbgdc'
    expect(testFunc(s, t)).toEqual(true)
  })
  it('case 3', () => {
    const s = 'abc'
    const t = 'ahbbgdc'
    expect(testFunc(s, t)).toEqual(true)
  })
  it('case 2', () => {
    const s = 'axc'
    const t = 'ahbgdc'
    expect(testFunc(s, t)).toEqual(false)
  })
})
