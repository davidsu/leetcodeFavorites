const testFuncs = require('../src/825.friends-of-appropriate-ages.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([16, 17, 18])).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc([16, 16])).toEqual(2)
  })
  it('case 3', () => {
    expect(testFunc([20, 30, 100, 110, 120])).toEqual(3)
  })
  it('case 4', () => {
    expect(testFunc([101, 56, 69, 48, 30])).toEqual(4)
  })
  it('case 5', () => {
    expect(testFunc([108, 115, 5, 24, 82])).toEqual(3)
  })
})
