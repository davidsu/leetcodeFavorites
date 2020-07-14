const testFuncs = require('../src/1344.angle-between-hands-of-a-clock.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const hour = 12; const minutes = 30
    expect(testFunc(hour, minutes)).toEqual(165)
  })
  it('case 2', () => {
    const hour = 3; const minutes = 30
    expect(testFunc(hour, minutes)).toBe(75)
  })
  it('case 3', () => {
    const hour = 3; const minutes = 15
    expect(testFunc(hour, minutes)).toBe(7.5)
  })
})
