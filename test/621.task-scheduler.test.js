const testFuncs = require('../src/621.task-scheduler.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toEqual(8)
  })
  it('case 2', () => {
    expect(testFunc(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6)
  })
  it('case 3', () => {
    expect(testFunc(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)).toBe(16)
  })
})
