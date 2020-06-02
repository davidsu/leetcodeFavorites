const testFuncs = require('../src/290.word-pattern.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const pattern = 'abba'
    const str = 'dog cat cat dog'
    expect(testFunc(pattern, str)).toEqual(true)
  })
  it('case 2', () => {
    const pattern = 'abba'
    const str = 'dog cat cat fish'
    expect(testFunc(pattern, str)).toEqual(false)
  })
  it('case 3', () => {
    const pattern = 'aaaa'
    const str = 'dog cat cat dog'
    expect(testFunc(pattern, str)).toEqual(false)
  })
  it('case 4', () => {
    const pattern = 'abba'
    const str = 'dog dog dog dog'
    expect(testFunc(pattern, str)).toEqual(false)
  })
})
