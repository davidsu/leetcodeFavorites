const testFuncs = require('../src/79.word-search.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(
      testFunc(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
        ],
        'ABCCED'
      )
    ).toEqual(true)
  })
  it('case 2', () => {
    expect(
      testFunc(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
        ],
        'SEE'
      )
    ).toEqual(true)
  })
  it('case 3', () => {
    expect(
      testFunc(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
        ],
        'ABCB'
      )
    ).toEqual(false)
  })
  it('case 4', () => {
    expect(testFunc([['a', 'b']], 'ba')).toEqual(true)
  })
})
