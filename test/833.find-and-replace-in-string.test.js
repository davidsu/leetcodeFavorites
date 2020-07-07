const testFuncs = require('../src/833.find-and-replace-in-string.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const S = 'abcd'; const indexes = [0, 2]; const sources = ['a', 'cd']; const targets = ['eee', 'ffff']
    expect(testFunc(S, indexes, sources, targets)).toEqual('eeebffff')
  })
  it('case 2', () => {
    const S = 'abcd'; const indexes = [0, 2]; const sources = ['ab', 'ec']; const targets = ['eee', 'ffff']
    expect(testFunc(S, indexes, sources, targets)).toEqual('eeecd')
  })
})
