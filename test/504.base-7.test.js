const testFuncs = require('../src/504.base-7.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(100)).toEqual('202')
  })
  it('case 2', () => {
    expect(testFunc(-7)).toEqual('-10')
  })
})
