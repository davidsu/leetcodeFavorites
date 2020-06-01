const testFuncs = require('../src/1399.count-largest-group.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(13)).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc(2)).toEqual(2)
  })
  it('case 3', () => {
    expect(testFunc(15)).toEqual(6)
  })
  it('case 4', () => {
    expect(testFunc(24)).toEqual(5)
  })
  it('case 5', () => {
    expect(testFunc(999)).toEqual(2)
  })
})
