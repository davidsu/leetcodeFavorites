const testFuncs = require('../src/1046.last-stone-weight.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 7, 4, 1, 8, 1])).toEqual(1)
  })
})
