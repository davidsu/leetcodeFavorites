// const testFuncs = require('../src/1202.smallest-string-with-swaps.js')
const testFuncs = []
xdescribe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const s = 'dcab'; const pairs = [[0, 3], [1, 2]]
    expect(testFunc(s, pairs)).toEqual('bacd')
  })
  it('case 2', () => {
    const s = 'cba'; const pairs = [[0, 1], [1, 2]]
    expect(testFunc(s, pairs)).toEqual('abc')
  })
  it('case 3', () => {
    const s = 'dcab'; const pairs = [[0, 3], [1, 2], [0, 2]]
    expect(testFunc(s, pairs)).toEqual('abcd')
  })
})
