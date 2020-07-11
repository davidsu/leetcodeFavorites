const testFuncs = require('../src/1507.reformat-date.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc('20th Oct 2052')).toEqual('2052-10-20')
  })
  it('case 2', () => {
    expect(testFunc('6th Jun 1933')).toEqual('1933-06-06')
  })
  it('case 3', () => {
    expect(testFunc('26th May 1960')).toEqual('1960-05-26')
  })
})
