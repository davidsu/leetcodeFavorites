const testFuncs = require('../src/1004.max-consecutive-ones-iii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toEqual(6)
  })
  it('case 2', () => {
    expect(testFunc([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toEqual(10)
  })
  it('case 3', () => {
    expect(testFunc([0, 0, 1, 1, 1, 0, 0], 0)).toEqual(3)
  })
})
