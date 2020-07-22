const testFuncs = require('../src/1405.longest-happy-string.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  const verify = result =>
    Array.prototype.forEach.call(result, (char, i) => expect(result[i - 1] === char && result[i - 2] === char).toBe(false))
  it('case 1', () => {
    const a = 2; const b = 2; const c = 1
    const result = testFunc(a, b, c)
    expect(result.length).toEqual(5)
    verify(result)
  })
  it('case 2', () => {
    const a = 7; const b = 1; const c = 0
    const result = testFunc(a, b, c)
    expect(result.length).toBe(5)
    verify(result)
  })
  it('case 3', () => {
    const a = 1; const b = 1; const c = 7
    const result = testFunc(a, b, c)
    expect(result.length).toBe(8)
    verify(result)
  })
})
