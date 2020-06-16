const testFuncs = require('../src/1025.divisor-game.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(2)).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc(3)).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc(10)).toBe(true)
  })
})
