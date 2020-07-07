const testFuncs = require('../src/779.k-th-symbol-in-grammar.js')
xdescribe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(1, 1)).toEqual(0)
  })
  it('case 2', () => {
    expect(testFunc(2, 1)).toEqual(0)
  })
  it('case 3', () => {
    expect(testFunc(2, 2)).toEqual(1)
  })
  it('case 4', () => {
    expect(testFunc(4, 5)).toEqual(1)
  })
  it('case 5', () => {
    expect(testFunc(3, 3)).toEqual(1)
  })
})
