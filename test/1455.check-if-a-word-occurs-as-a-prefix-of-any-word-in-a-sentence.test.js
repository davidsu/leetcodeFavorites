const testFuncs = require('../src/1455.check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('i love eating burger', 'burg')).toEqual(4)
  })
  it('case 3', () => {
    expect(testFunc('this problem is an easy problem', 'pro')).toEqual(2)
  })
  it('case 2', () => {
    expect(testFunc('i am tired', 'you')).toEqual(-1)
  })
})
