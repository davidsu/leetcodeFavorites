const testFuncs = require('../src/720.longest-word-in-dictionary.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['w', 'wo', 'wor', 'worl', 'world'])).toEqual('world')
  })
  it('case 2', () => {
    expect(testFunc(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])).toEqual('apple')
  })
  it('case 3', () => {
    expect(testFunc(['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat'])).toEqual('latte')
  })
  it('case 4', () => {
    expect(testFunc(['rac', 'rs', 'ra', 'on', 'r', 'otif', 'o', 'onpdu', 'rsf', 'rs', 'ot', 'oti', 'racy', 'onpd']
    )).toEqual('otif')
  })
  it('case 5', () => {
    expect(testFunc(['ts', 'e', 'x', 'pbhj', 'opto', 'xhigy', 'erikz', 'pbh', 'opt', 'erikzb', 'eri', 'erik', 'xlye', 'xhig', 'optoj', 'optoje', 'xly', 'pb', 'xhi', 'x', 'o']
    )).toEqual('e')
  })
})
