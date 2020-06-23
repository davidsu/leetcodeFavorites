const testFuncs = require('../src/870.advantage-shuffle.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  // watch out for these can false-negative
  it('case 1', () => {
    expect(testFunc([2, 7, 11, 15], [1, 10, 4, 11])).toEqual([2, 11, 7, 15])
  })
  it('case 2', () => {
    expect(testFunc([12, 24, 8, 32], [13, 25, 32, 11])).toEqual([24, 32, 8, 12])
  })
})
