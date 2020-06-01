const testFuncs = require('../src/289.game-of-life.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ]
    const expected = [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ]
    testFunc(board)
    expect(board).toEqual(expected)
  })
})
