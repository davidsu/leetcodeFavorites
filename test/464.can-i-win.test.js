const testFuncs = require('../src/464.can-i-win.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(10, 11)).toEqual(false)
  })
  it('case 1', () => {
    expect(testFunc(15, 45)).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc(3, 5)).toBe(true)
  })
  it('case 4', () => {
    expect(testFunc(10, 0)).toBe(true)
  })
  it('case 5', () => {
    expect(testFunc(5, 50)).toBe(false)
  })
})
