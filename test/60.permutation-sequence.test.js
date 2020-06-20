const testFuncs = require('../src/60.permutation-sequence.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3, 3)).toEqual('213')
  })
  it('case 2', () => {
    expect(testFunc(4, 9)).toEqual('2314')
  })
})
