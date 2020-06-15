const testFuncs = require('../src/1021.remove-outermost-parentheses.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('(()())(())')).toEqual('()()()')
  })
  it('case 2', () => {
    expect(testFunc('(()())(())(()(()))')).toEqual('()()()()(())')
  })
  it('case 3', () => {
    expect(testFunc('()()')).toEqual('')
  })
})
