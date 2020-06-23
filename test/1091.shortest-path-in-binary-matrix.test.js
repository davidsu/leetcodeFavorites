const testFuncs = require('../src/1091.shortest-path-in-binary-matrix.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[0, 1], [1, 0]])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([[0, 0, 0], [1, 1, 0], [1, 1, 0]])).toEqual(4)
  })
  it('case 3', () => {
    expect(testFunc([[1,0,0],[1,1,0],[1,1,0]])).toEqual(-1)
  })
})
