const testFuncs = require('../src/405.convert-a-number-to-hexadecimal.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(-1)).toEqual('ffffffff')
  })
  it('case 2', () => {
    expect(testFunc(26)).toEqual('1a')
  })
  it('case 3', () => {
    expect(testFunc(0)).toEqual('0')
  })
})
