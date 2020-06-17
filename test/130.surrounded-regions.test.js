const testFuncs = require('../src/130.surrounded-regions.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const mat = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X']
    ]
    const expected = [
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']
    ]
    testFunc(mat)
    expect(mat).toEqual(expected)
  })
  it('case 2', () => {
    const mat = [['O', 'O'], ['O', 'O']]
    const expected = [['O', 'O'], ['O', 'O']]
    testFunc(mat)
    expect(mat).toEqual(expected)
  })
  it('case 3', () => {
    expect(() => testFunc([])).not.toThrow()
  })
})
