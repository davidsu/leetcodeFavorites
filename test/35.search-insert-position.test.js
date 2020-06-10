const testFuncs = require('../src/35.search-insert-position.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 3, 5, 6], 5)).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([1, 3, 5, 6], 2)).toEqual(1)
  })
  it('case 3', () => {
    expect(testFunc([1, 3, 5, 6], 7)).toEqual(4)
  })
  it('case 4', () => {
    expect(testFunc([1, 3, 5, 6], 0)).toEqual(0)
  })
  it('case 5', () => {
    expect(testFunc([], 0)).toEqual(0)
  })
})
