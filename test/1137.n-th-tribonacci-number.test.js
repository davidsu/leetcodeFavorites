const testFuncs = require('../src/1137.n-th-tribonacci-number.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(4)).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc(25)).toEqual(1389537)
  })
})
