const testFuncs = require('../src/1356.sort-integers-by-the-number-of-1-bits.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const expected = [0, 1, 2, 4, 8, 3, 5, 6, 7]
    expect(testFunc(arr)).toEqual(expected)
  })
  it('case 2', () => {
    const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
    const expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
    expect(testFunc(arr)).toEqual(expected)
  })
  it('case 3', () => {
    const arr = [10000, 10000]
    const expected = [10000, 10000]
    expect(testFunc(arr)).toEqual(expected)
  })
  it('case 4', () => {
    const arr = [2, 3, 5, 7, 11, 13, 17, 19]
    const expected = [2, 3, 5, 17, 7, 11, 13, 19]
    expect(testFunc(arr)).toEqual(expected)
  })
  it('case 5', () => {
    const arr = [10, 100, 1000, 10000]
    const expected = [10, 100, 10000, 1000]
    expect(testFunc(arr)).toEqual(expected)
  })
})
