const testFuncs = require('../src/172.factorial-trailing-zeroes.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(3)).toEqual(0)
  })
  it('case 2', () => {
    expect(testFunc(5)).toEqual(1)
  })
  it('case 3', () => {
    expect(testFunc(30)).toEqual(7)
  })
})
