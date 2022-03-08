const testFuncs = require('../src/1089.duplicate-zeros.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc()).toEqual(false)
  })
})
