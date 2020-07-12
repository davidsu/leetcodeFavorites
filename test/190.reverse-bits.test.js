const testFuncs = require('../src/190.reverse-bits.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 0', () => {
    expect(testFunc(43261596)).toEqual(964176192)
  })
  it('case 1', () => {
    const val = '11111111111111111111111111111101'
    const result = '10111111111111111111111111111111'
    expect(testFunc(parseInt(val, 2)).toString(2)).toEqual(result)
  })
})
