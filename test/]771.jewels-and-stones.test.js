const testFuncs = require('../src/771.jewels-and-stones')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('aA', 'aAAbbbb')).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc('z', 'ZZ')).toEqual(0)
  })
})
