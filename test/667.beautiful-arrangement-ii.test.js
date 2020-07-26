const testFuncs = require('../src/667.beautiful-arrangement-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const n = 3; const k = 1
    expect(testFunc(n, k)).toEqual([1, 2, 3])
  })
  it('case 2', () => {
    const n = 3; const k = 2
    expect(testFunc(n, k)).toEqual([1, 3, 2])
  })
})
