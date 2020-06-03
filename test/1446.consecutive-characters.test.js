const testFuncs = require('../src/1446.consecutive-characters.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('abbcccddddeeeeedcba')).toEqual(5)
  })

  it('case 2', () => {
    expect(testFunc('triplepillooooow')).toEqual(5)
  })
  it('case 3', () => {
    expect(testFunc('hooraaaaaaaaaaay')).toEqual(11)
  })
  it('case 4', () => {
    expect(testFunc('tourist')).toEqual(1)
  })
})
