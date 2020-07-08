const testFuncs = require('../src/15.3sum.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(new Set(testFunc([-1, 0, 1, 2, -1, -4]))).toEqual(new Set([
      [-1, 0, 1],
      [-1, -1, 2]
    ]))
  })
})
