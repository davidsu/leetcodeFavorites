const testFuncs = require('../src/824.goat-latin.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('I speak Goat Latin')).toEqual('Imaa peaksmaaa oatGmaaaa atinLmaaaaa')
  })
  it('case 2', () => {
    expect(testFunc('The quick brown fox jumped over the lazy dog')).toEqual('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa')
  })
})
