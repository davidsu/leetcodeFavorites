const testFuncs = require('../src/1078.occurrences-after-bigram.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('alice is a good girl she is a good student', 'a', 'good')).toEqual(['girl', 'student'])
  })
  it('case 2', () => {
    expect(testFunc('we will we will rock you', 'we', 'will')).toEqual(['we', 'rock'])
  })
  it('case 3', () => {
    expect(testFunc('alice is aa good girl she is a good student', 'a', 'good')).toEqual(['student'])
  })
  it('case 4', () => {
    expect(testFunc(
      'jkypmsxd jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa kcyxdfnoa jkypmsxd kcyxdfnoa',
      'kcyxdfnoa',
      'jkypmsxd')).toEqual(['kcyxdfnoa', 'kcyxdfnoa', 'kcyxdfnoa'])
  })
})
