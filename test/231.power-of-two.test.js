const testFuncs = require('../src/231.power-of-two.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(1)).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc(0)).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc(32)).toEqual(true)
  })
  it('case 4', () => {
    expect(testFunc(228)).toEqual(false)
  })
})
