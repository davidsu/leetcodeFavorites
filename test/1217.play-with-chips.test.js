const testFuncs = require('../src/1217.play-with-chips.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([2, 2, 2, 3, 3])).toEqual(2)
  })
})
