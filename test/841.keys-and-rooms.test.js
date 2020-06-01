const testFuncs = require('../src/841.keys-and-rooms')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1], [2], [3], []])).toEqual(true)
  })
  it('case 1', () => {
    expect(testFunc([[1, 3], [3, 0, 1], [2], [0]])).toEqual(false)
  })
})
