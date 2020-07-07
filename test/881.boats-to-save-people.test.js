const testFuncs = require('../src/881.boats-to-save-people.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const people = [1, 2]; const limit = 3
    expect(testFunc(people, limit)).toEqual(1)
  })
  it('case 2', () => {
    const people = [3, 2, 2, 1]; const limit = 3
    expect(testFunc(people, limit)).toEqual(3)
  })
  it('case 3', () => {
    const people = [3, 5, 3, 4]; const limit = 5
    expect(testFunc(people, limit)).toEqual(4)
  })
})
