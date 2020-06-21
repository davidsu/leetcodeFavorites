const testFuncs = require('../src/174.dungeon-game.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5]
    ])).toEqual(7)
  })
  it('case 2', () => {
    expect(testFunc([[0]])).toEqual(1)
  })
  it('case 3', () => {
    expect(testFunc([[-200]])).toEqual(201)
  })
})
