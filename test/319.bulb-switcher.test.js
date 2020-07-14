const testFuncs = require('../src/319.bulb-switcher.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3)).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc(100)).toBe(10)
  })
})
