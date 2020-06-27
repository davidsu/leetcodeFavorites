const testFuncs = require('../src/565.array-nesting.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([5, 4, 0, 3, 1, 6, 2])).toEqual(4)
  })
})
