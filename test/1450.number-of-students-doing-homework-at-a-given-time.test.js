const testFuncs = require('../src/1450.number-of-students-doing-homework-at-a-given-time.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3], [3, 2, 7], 4)).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([4], [4], 4)).toEqual(1)
  })
  it('case 3', () => {
    expect(testFunc([4], [4], 5)).toEqual(0)
  })
  it('case 4', () => {
    expect(testFunc([1, 1, 1, 1], [1, 3, 2, 4], 7)).toEqual(0)
  })

  it('case 5', () => {
    expect(testFunc([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5)).toEqual(5)
  })
})
