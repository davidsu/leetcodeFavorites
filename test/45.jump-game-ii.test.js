const testFuncs = require('../src/45.jump-game-ii.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 3, 1, 1, 4])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([0])).toEqual(0)
  })
  it('case 3', () => {
    expect(testFunc([1, 2, 1, 1, 1])).toEqual(3)
  })
  it('case 4', () => {
    expect(testFunc([2, 3, 1])).toEqual(1)
  })
})
