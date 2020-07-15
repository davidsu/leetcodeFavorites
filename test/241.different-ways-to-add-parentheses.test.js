const testFuncs = require('../src/241.different-ways-to-add-parentheses.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('2-1-1').sort()).toEqual([0, 2].sort())
  })
  it('case 2', () => {
    expect(testFunc('2*3-4*5').sort()).toEqual([-34, -14, -10, -10, 10].sort())
  })
  it('case 3', () => {
    expect(testFunc('15-7+6*24').sort()).toEqual([-297, -136, 48, 152, 336].sort())
  })
})
