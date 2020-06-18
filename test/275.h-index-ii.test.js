const testFuncs = require('../src/275.h-index-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([0, 1, 3, 5, 6])).toEqual(3)
  })
})
