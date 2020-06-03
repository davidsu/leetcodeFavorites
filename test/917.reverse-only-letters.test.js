const testFuncs = require('../src/917.reverse-only-letters.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('ab-cd')).toEqual('dc-ba')
  })
  it('case 2', () => {
    expect(testFunc('a-bC-dEf-ghIj')).toEqual('j-Ih-gfE-dCba')
  })
  it('case 3', () => {
    expect(testFunc('Test1ng-Leet=code-Q!')).toEqual('Qedo1ct-eeLg=ntse-T!')
  })
})
