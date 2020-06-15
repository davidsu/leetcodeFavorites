const testFuncs = require('../src/892.surface-area-of-3d-shapes.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[2]])).toEqual(10)
  })
  it('case 2', () => {
    expect(testFunc([[1, 2], [3, 4]])).toEqual(34)
  })
  it('case 3', () => {
    expect(testFunc([[1, 0], [0, 2]])).toEqual(16)
  })
  it('case 4', () => {
    expect(testFunc([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual(32)
  })
  it('case 5', () => {
    expect(testFunc([[2, 2, 2], [2, 1, 2], [2, 2, 2]])).toEqual(46)
  })
})
