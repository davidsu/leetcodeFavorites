const testFuncs = require('../src/1306.jump-game-iii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const arr = [4, 2, 3, 0, 3, 1, 2]; const start = 5
    expect(testFunc(arr, start)).toEqual(true)
  })
  it('case 2', () => {
    const arr = [4, 2, 3, 0, 3, 1, 2]; const start = 0
    expect(testFunc(arr, start)).toEqual(true)
  })
  it('case 3', () => {
    const arr = [3, 0, 2, 1, 2]; const start = 2
    expect(testFunc(arr, start)).toEqual(false)
  })
})
