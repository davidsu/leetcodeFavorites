const testFuncs = require('../src/283.move-zeroes')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const testcase = [0, 1, 0, 3, 12]
    testFunc(testcase)
    expect(testcase).toEqual([1, 3, 12, 0, 0])
  })
})
