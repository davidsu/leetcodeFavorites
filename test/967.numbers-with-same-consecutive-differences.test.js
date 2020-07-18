const testFuncs = require('../src/967.numbers-with-same-consecutive-differences.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const N = 3; const K = 7
    expect(testFunc(N, K)).toEqual([181, 292, 707, 818, 929])
  })
  it('case 2', () => {
    const N = 2; const K = 1
    expect(testFunc(N, K)).toEqual([10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98])
  })
  it('case 3', () => {
    expect(testFunc(2, 0)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99])
  })
  it('case 4', () => {
    expect(testFunc(3, 0)).toEqual([111, 222, 333, 444, 555, 666, 777, 888, 999])
  })
})
