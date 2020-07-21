const testFuncs = require('../src/78.subsets.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const result = testFunc([1, 2, 3]).sort((a, b) => a.length - b.length || a[0] - b[0] || a[1] - b[1])
    expect(result).toEqual([
      [],
      [1],
      [2],
      [3],
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 2, 3]
    ]
    )
  })
})
