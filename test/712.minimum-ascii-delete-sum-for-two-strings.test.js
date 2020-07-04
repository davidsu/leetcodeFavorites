const testFuncs = require('../src/712.minimum-ascii-delete-sum-for-two-strings.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const s1 = 'sea'; const s2 = 'eat'
    expect(testFunc(s1, s2)).toEqual(231)
  })
  it('case 2', () => {
    const s1 = 'delete'; const s2 = 'leet'
    expect(testFunc(s1, s2)).toBe(403)
  })
})
