const testFuncs = require('../src/1109.corporate-flight-bookings.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const bookings = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]; const n = 5
    expect(testFunc(bookings, n)).toEqual([10, 55, 45, 25, 25])
  })
})
