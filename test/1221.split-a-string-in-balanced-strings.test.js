const testFuncs = require('../src/1221.split-a-string-in-balanced-strings.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('RLRRLLRLRL')).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc('RLLLLRRRLR')).toEqual(3)
  })
  it('case 3', () => {
    expect(testFunc('LLLLRRRR')).toEqual(1)
  })
  it('case 4', () => {
    expect(testFunc('RLRRRLLRLL')).toEqual(2)
  })
})
