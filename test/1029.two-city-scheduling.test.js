const testFuncs = require('../src/1029.two-city-scheduling.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[10, 20], [30, 200], [400, 50], [30, 20]])).toEqual(110)
  })
  it('case 2', () => {
    expect(testFunc([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]])).toEqual(1859)
  })
})
