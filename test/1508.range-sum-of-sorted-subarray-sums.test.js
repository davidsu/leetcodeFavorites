const testFuncs = require('../src/1508.range-sum-of-sorted-subarray-sums')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const nums = [1, 2, 3, 4]; const n = 4; const left = 1; const right = 5
    expect(testFunc(nums, n, left, right)).toBe(13)
  })
  it('case 2', () => {
    const nums = [1, 2, 3, 4]; const n = 4; const left = 3; const right = 4
    expect(testFunc(nums, n, left, right)).toBe(6)
  })
  it('case 3', () => {
    const nums = [1, 2, 3, 4]; const n = 4; const left = 1; const right = 10
    expect(testFunc(nums, n, left, right)).toBe(50)
  })
})
