const testFuncs = require('../src/500.keyboard-row.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual(['Alaska', 'Dad'])
  })
})
