const testFuncs = require('../src/1510.stone-game-iv.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(1)).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc(2)).toBe(false)
  })
  it('case 3', () => {
    expect(testFunc(4)).toBe(true)
  })
  it('case 4', () => {
    expect(testFunc(7)).toBe(false)
  })
  it('case 5', () => {
    expect(testFunc(17)).toBe(false)
  })
})
