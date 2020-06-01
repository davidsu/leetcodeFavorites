const testFuncs = require('../src/1413.minimum-value-to-get-positive-step-by-step-sum.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([-3, 2, -3, 4, 2])).toEqual(5)
  })
  it('case 2', () => {
    expect(testFunc([1, 2])).toEqual(1)
  })
  it('case 3', () => {
    expect(testFunc([1, -2, -3])).toEqual(5)
  })
})
