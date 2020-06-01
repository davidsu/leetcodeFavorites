const testFuncs = require('../src/598.range-addition-ii.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(
      testFunc(3, 3, [
        [2, 2],
        [3, 3]
      ])
    ).toEqual(4)
  })
})
