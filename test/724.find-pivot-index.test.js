const testFuncs = require('../src/724.find-pivot-index.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 7, 3, 6, 5, 6])).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc([1, 2, 3])).toEqual(-1)
  })
  it('case 3', () => {
    expect(testFunc([-1, -1, -1, -1, -1, 0])).toEqual(2)
  })
  it('case 4', () => {
    expect(testFunc([])).toEqual(-1)
  })
  it('case 5', () => {
    expect(testFunc([-1, -1, -1, -1, 0, 1])).toEqual(1)
  })
})
