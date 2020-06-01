const testFuncs = require('../src/380.insert-delete-getrandom-o1.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    const randomized = testFunc()
    expect(randomized.insert(1)).toEqual(true)
    expect(randomized.remove(2)).toEqual(false)
    expect(randomized.insert(2)).toEqual(true)
    expect([1, 2]).toContain(randomized.getRandom())
    expect(randomized.remove(1)).toEqual(true)
    expect(randomized.insert(2)).toEqual(false)
    expect(randomized.getRandom()).toEqual(2)
  })
})
