const testFuncs = require('../src/886.possible-bipartition.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(
      testFunc(4, [
        [1, 2],
        [1, 3],
        [2, 4]
      ])
    ).toEqual(true)
  })
  it('case 2', () => {
    expect(
      testFunc(3, [
        [1, 2],
        [1, 3],
        [2, 3]
      ])
    ).toEqual(false)
  })
  it('case 3', () => {
    expect(
      testFunc(5, [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [1, 5]
      ])
    ).toEqual(false)
  })
  it('case 4', () => {
    expect(testFunc(1, [])).toEqual(true)
  })
})
