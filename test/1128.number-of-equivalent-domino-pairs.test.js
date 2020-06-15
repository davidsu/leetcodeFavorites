const testFuncs = require('../src/1128.number-of-equivalent-domino-pairs.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2], [2, 1], [3, 4], [5, 6]])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([[1, 2], [2, 1], [2, 1], [1, 2], [1, 2], [3, 4], [5, 6]])).toEqual(10)
  })
})
