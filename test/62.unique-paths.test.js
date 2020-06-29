const testFuncs = require('../src/62.unique-paths.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(7, 3)).toEqual(28)
  })
})
