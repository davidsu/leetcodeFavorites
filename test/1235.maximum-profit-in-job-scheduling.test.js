const testFuncs = require('../src/1235.maximum-profit-in-job-scheduling.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc()).toEqual(false)
  })
})
