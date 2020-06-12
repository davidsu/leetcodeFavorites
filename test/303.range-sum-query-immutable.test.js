const testFuncs = require('../src/303.range-sum-query-immutable.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, TestFunc) => {
  it('case 1', () => {
    expect(new TestFunc([-2, 0, 3, -5, 2, -1]).sumRange(0, 2)).toEqual(1)
  })
  it('case 2', () => {
    expect(new TestFunc([-2, 0, 3, -5, 2, -1]).sumRange(2, 5)).toEqual(-1)
  })
  it('case 3', () => {
    expect(new TestFunc([-2, 0, 3, -5, 2, -1]).sumRange(0, 5)).toEqual(-3)
  })
})
