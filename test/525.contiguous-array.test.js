const testFuncs = require('../src/525.contiguous-array.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 0', () => {
    expect(testFunc([1, 1])).toEqual(0)
  })
  it('case 1', () => {
    expect(testFunc([0, 1])).toEqual(2)
  })
  it('test 2', () => {
    expect(testFunc([0, 1, 0])).toEqual(2)
  })
  it('test 3', () => {
    expect(testFunc([0, 0, 1, 1, 0])).toEqual(4)
  })
  it('test 4', () => {
    expect(testFunc([0, 0, 1, 0, 0, 0, 1, 1])).toEqual(6)
  })
  it('test 5', () => {
    expect(testFunc([0, 1, 1, 0, 1, 1, 1, 0])).toEqual(4)
  })
})
