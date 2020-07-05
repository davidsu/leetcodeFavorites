const testFuncs = require('../src/461.hamming-distance.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(1, 4)).toEqual(2)
  })
})
