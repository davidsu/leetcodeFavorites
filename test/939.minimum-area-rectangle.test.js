// const testFuncs = require('../src/939.minimum-area-rectangle.js')
const testFuncs = []
xdescribe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]])).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc([[1, 1], [1, 3], [3, 1], [3, 3], [4, 1], [4, 3]])).toBe(2)
  })
})
