const testFuncs = require('../src/419.battleships-in-a-board.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([
      ['X', '.', '.', 'X'],
      ['.', '.', '.', 'X'],
      ['.', '.', '.', 'X']
    ])).toEqual(2)
  })
})
