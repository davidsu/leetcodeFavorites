const testFuncs = require('../src/1208.get-equal-substrings-within-budget.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const s = 'abcd'; const t = 'bcdf'; const maxCost = 3
    expect(testFunc(s, t, maxCost)).toEqual(3)
  })
  it('testFunc', () => {
    const s = 'abcd'; const t = 'cdef'; const maxCost = 3
    expect(testFunc(s, t, maxCost)).toEqual(1)
  })
  it('case 3', () => {
    const s = 'abcd'; const t = 'acde'; const maxCost = 0
    expect(testFunc(s, t, maxCost)).toEqual(1)
  })
})
