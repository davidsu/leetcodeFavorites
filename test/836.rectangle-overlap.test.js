const testFuncs = require('../src/836.rectangle-overlap.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const rec1 = [0, 0, 2, 2]
    const rec2 = [1, 1, 3, 3]
    expect(testFunc(rec1, rec2)).toEqual(true)
  })
  it('case 2', () => {
    const rec1 = [0, 0, 1, 1]
    const rec2 = [1, 0, 2, 1]
    expect(testFunc(rec1, rec2)).toEqual(false)
  })
})
