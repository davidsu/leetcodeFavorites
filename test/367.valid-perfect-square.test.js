const testFuncs = require('../src/367.valid-perfect-square.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(100)).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc(101)).toEqual(false)
  })
  it('case 4', () => {
    expect(testFunc(2000105819)).toEqual(false)
  })
  it('case 5', () => {
    expect(testFunc(1)).toEqual(true)
  })
})
