const testFuncs = require('../src/278.first-bad-version.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc((n) => n >= 4)(5)).toEqual(4)
  })
})
