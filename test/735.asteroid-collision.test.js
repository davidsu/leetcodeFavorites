const testFuncs = require('../src/735.asteroid-collision.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case -1', () => {
    expect(testFunc([5, 10])).toEqual([5, 10])
  })
  it('case 0', () => {
    expect(testFunc([5])).toEqual([5])
  })
  it('case 1', () => {
    expect(testFunc([5, 10, -5])).toEqual([5, 10])
  })
  it('case 2', () => {
    expect(testFunc([8, -8])).toEqual([])
  })
  it('case 3', () => {
    expect(testFunc([10, 2, -5])).toEqual([10])
  })
  it('case 4', () => {
    expect(testFunc([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2])
  })
})
