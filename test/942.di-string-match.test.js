const testFuncs = require('../src/942.di-string-match.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  const compare = (i, arr, char) => char === 'D' ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]
  const isValid = (S, arr) => S.split('').every((char, i) => compare(i, arr, char))

  it('case 1', () => {
    const S = 'IDID'
    expect(isValid(S, testFunc(S))).toEqual(true)
  })
  it('case 2', () => {
    const S = 'III'
    expect(isValid(S, testFunc(S))).toEqual(true)
  })
  it('test 3', () => {
    const S = 'DDI'
    expect(isValid(S, testFunc(S))).toEqual(true)
  })
})
