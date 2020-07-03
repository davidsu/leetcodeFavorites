const testFuncs = require('../src/860.lemonade-change.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([5, 5, 5, 10, 20])).toEqual(true)
  })
  it('case 3', () => {
    expect(testFunc([5, 5, 10])).toEqual(true)
  })
  it('case 4', () => {
    expect(testFunc([10, 10])).toEqual(false)
  })
  it('case 5', () => {
    expect(testFunc([5, 5, 10, 10, 20])).toEqual(false)
  })
})
