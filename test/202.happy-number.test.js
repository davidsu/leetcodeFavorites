const testFuncs = require('../src/202.happy-number')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(19)).toEqual(true)
  })
})
