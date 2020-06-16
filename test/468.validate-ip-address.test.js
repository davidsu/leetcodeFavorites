const testFuncs = require('../src/468.validate-ip-address.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('172.16.254.1')).toEqual('IPv4')
  })
  it('case 2', () => {
    expect(testFunc('2001:0db8:85a3:0:0:8A2E:0370:7334')).toEqual('IPv6')
  })
  it('case 3', () => {
    expect(testFunc('172.16.254.01')).toEqual('Neither')
  })
  it('case 4', () => {
    expect(testFunc('2001:0db8:85a3::8A2E:0370:7334')).toEqual('Neither')
  })
  it('case 5', () => {
    expect(testFunc('02001:0db8:85a3:0000:0000:8a2e:0370:7334')).toEqual('Neither')
  })
  it('case 6', () => {
    expect(testFunc('1e1.4.5.6')).toEqual('Neither')
  })
  it('case 7', () => {
    expect(testFunc('111.0.5.6')).toEqual('IPv4')
  })
})
