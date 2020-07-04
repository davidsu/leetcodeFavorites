const testFuncs = require('../src/264.ugly-number-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(10)).toEqual(12)
  })
  it('case 2', () => {
    expect(testFunc(11)).toEqual(15)
  })
  it('case 3', () => {
    expect(testFunc(299)).toEqual(81920)
  })
  it('case 4', () => {
    expect(testFunc(479)).toBe(759375)
  })
  it('case 5', () => {
    expect(testFunc(13)).toBe(18)
  })
})
