const testFuncs = require('../src/1185.day-of-the-week.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(31, 8, 2019)).toEqual('Saturday')
  })
  it('case 2', () => {
    expect(testFunc(18, 7, 1999)).toEqual('Sunday')
  })
  it('case 3', () => {
    expect(testFunc(15, 8, 1993)).toEqual('Sunday')
  })
})
