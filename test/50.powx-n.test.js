const testFuncs = require('../src/50.powx-n.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(2.0, 10)).toEqual(1024.0)
  })
  it('cases 2', () => {
    const res = testFunc(2.1, 3)
    expect(res - 9.2610).toBeLessThan(0.00001)
    expect(res).toBeGreaterThanOrEqual(9.2610)
  })
  it('case 3', () => {
    expect(testFunc(2.0, -2)).toBe(0.25)
  })
})
