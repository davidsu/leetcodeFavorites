const testFuncs = require('../src/224.basic-calculator.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('1 + 1')).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc('  2-1 + 2 ')).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc('(1+(4+5+2)-3)+(6+8)')).toEqual(23)
  })
  it('case 3', () => {
    expect(testFunc('10-15')).toEqual(-5)
  })
  it('case 4', () => {
    expect(testFunc('2-(5-6)')).toEqual(3)
  })
})
