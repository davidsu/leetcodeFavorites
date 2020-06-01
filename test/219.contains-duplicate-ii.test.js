const { testFunc } = require('../src/219.contains-duplicate-ii.js')
describe('219.contains-duplicate-ii', () => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3, 1], 3)).toBe(true)
  })
  it('case 2', () => {
    expect(testFunc([1, 0, 1, 1], 1)).toBe(true)
  })
  it('case 3', () => {
    expect(testFunc([1, 2, 3, 1, 2, 3], 2)).toBe(false)
  })
})
