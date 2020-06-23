const testFuncs = require('../src/1268.search-suggestions-system.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse')).toEqual([
      ['mobile', 'moneypot', 'monitor'],
      ['mobile', 'moneypot', 'monitor'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad']
    ])
  })
  it('case 2', () => {
    expect(testFunc(['havana'], 'havana')).toEqual(
      [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']]
    )
  })
  it('case 3', () => {
    expect(testFunc(['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags')).toEqual(
      [['baggage', 'bags', 'banner'], ['baggage', 'bags', 'banner'], ['baggage', 'bags'], ['bags']]
    )
  })
  it('case 4', () => {
    expect(testFunc(['havana'], 'tatiana')).toEqual([[], [], [], [], [], [], []])
  })
  it('case 5', () => {
    expect(testFunc(['aba'], 'aab')).toEqual([['aba'], [], []])
  })
})
