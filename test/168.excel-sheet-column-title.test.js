const testFuncs = require('../src/168.excel-sheet-column-title.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(1)).toEqual('A')
  })
  it('case 2', () => {
    expect(testFunc(28)).toEqual('AB')
  })
  it('case 3', () => {
    expect(testFunc(701)).toEqual('ZY')
  })
})
