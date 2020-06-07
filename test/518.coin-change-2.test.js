const testFuncs = require('../src/518.coin-change-2.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(10, [10])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc(3, [2])).toEqual(0)
  })
  it('case 3', () => {
    expect(testFunc(5, [1, 2, 5])).toEqual(4)
  })
})
