const testFuncs = require('../src/1108.defanging-an-ip-address.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('1.1.1.1')).toEqual('1[.]1[.]1[.]1')
  })
  it('case 2', () => {
    expect(testFunc('255.100.50.0')).toEqual('255[.]100[.]50[.]0')
  })
})
