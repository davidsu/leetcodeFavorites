const testFuncs = require('../src/838.push-dominoes.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 0', () => {
    expect(testFunc('R.L')).toEqual('R.L')
  })
  it('case 1', () => {
    expect(testFunc('.L.R...LR..L..')).toEqual('LL.RR.LLRRLL..')
  })
  it('case 2', () => {
    expect(testFunc('RR.L')).toEqual('RR.L')
  })
  it('case 3', () => {
    expect(testFunc('.L.R.')).toEqual('LL.RR')
  })
})
