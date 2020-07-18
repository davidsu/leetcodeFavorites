const testFuncs = require('../src/593.valid-square.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const p1 = [0, 0]; const p2 = [1, 1]; const p3 = [1, 0]; const p4 = [0, 1]
    expect(testFunc(p1, p2, p3, p4)).toEqual(true)
  })
  it('case 2', () => {
    const p1 = [0, 0]; const p2 = [5, 0]; const p3 = [5, 4]; const p4 = [0, 4]
    expect(testFunc(p1, p2, p3, p4)).toEqual(false)
  })
})
