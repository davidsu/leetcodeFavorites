const testFuncs = require('../src/455.assign-cookies.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3], [1, 1])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([1, 2], [1, 2, 3])).toEqual(2)
  })
})
