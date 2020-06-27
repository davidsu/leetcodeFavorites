const testFuncs = require('../src/279.perfect-squares.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(12)).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc(13)).toEqual(2)
  })
})
