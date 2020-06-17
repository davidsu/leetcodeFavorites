const testFuncs = require('../src/1309.decrypt-string-from-alphabet-to-integer-mapping.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('10#11#12')).toEqual('jkab')
  })
  it('case 2', () => {
    expect(testFunc('1326#')).toEqual('acz')
  })
  it('case 3', () => {
    expect(testFunc('25#')).toEqual('y')
  })
  it('case 4', () => {
    expect(testFunc('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')).toEqual('abcdefghijklmnopqrstuvwxyz')
  })
})
