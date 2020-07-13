const testFuncs = require('../src/1438.longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const nums = [8, 2, 4, 7]; const limit = 4
    expect(testFunc(nums, limit)).toEqual(2)
  })
  it('case 2', () => {
    const nums = [10, 1, 2, 4, 7, 2]; const limit = 5
    expect(testFunc(nums, limit)).toEqual(4)
  })
  it('case 3', () => {
    const nums = [4, 10, 2, 6, 1]; const limit = 10
    expect(testFunc(nums, limit)).toEqual(5)
  })
})
