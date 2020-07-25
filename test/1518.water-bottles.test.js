const testFuncs = require('../src/1518.water-bottles.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc(15, 4)).toEqual(19)
  })
})
