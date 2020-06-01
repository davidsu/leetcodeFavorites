const testFuncs = require('../src/986.interval-list-intersections.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const A = [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25]
    ]
    const B = [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26]
    ]
    const expected = [
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25]
    ]
    const result = testFunc(A, B)
    expect(result).toEqual(expected)
  })
  it('case 1', () => {
    expect(() => testFunc([], [])).not.toThrow()
  })
})
