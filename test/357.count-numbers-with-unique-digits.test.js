const testFuncs = require('../src/357.count-numbers-with-unique-digits.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(2)).toEqual(91)
  })
})
