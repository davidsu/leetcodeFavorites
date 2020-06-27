const testFuncs = require('../src/187.repeated-dna-sequences.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA'])
  })
})
