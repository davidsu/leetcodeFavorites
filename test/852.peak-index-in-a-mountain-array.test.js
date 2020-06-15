const testFuncs = require('../src/852.peak-index-in-a-mountain-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([0, 1, 0])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([0, 2, 1, 0])).toEqual(1)
  })
})
