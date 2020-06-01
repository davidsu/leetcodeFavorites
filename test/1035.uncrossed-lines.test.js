const testFuncs = require('../src/1035.uncrossed-lines.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const A = [1, 4, 2]
    const B = [1, 2, 4]
    expect(testFunc(A, B)).toEqual(2)
  })
  it('case 2', () => {
    const A = [2, 5, 1, 2, 5]
    const B = [10, 5, 2, 1, 5, 2]
    expect(testFunc(A, B)).toBe(3)
  })
  it('case 3', () => {
    const A = [1, 3, 7, 1, 7, 5]
    const B = [1, 9, 2, 5, 1]
    expect(testFunc(A, B)).toBe(2)
  })
  it('case 5', () => {
    const A = [3, 1, 2, 1, 4, 1, 2, 2, 5, 3, 2, 1, 1, 4, 5, 2, 3, 2, 5, 5]
    const B = [2, 4, 1, 2, 3, 4, 2, 4, 5, 5, 1, 1, 2, 1, 1, 1, 5, 4, 1, 4, 2, 1, 5, 4, 2, 3, 1, 5, 2, 1]
    expect(testFunc(A, B)).toBe(14)
  })
  it('case 4', () => {
    const A = new Array(100).fill(2)
    const B = A
    expect(testFunc(A, B)).toBe(100)
  })
})
