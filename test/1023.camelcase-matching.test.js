const testFuncs = require('../src/1023.camelcase-matching.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']
    const pattern = 'FB'
    const output = [true, false, true, true, false]
    expect(testFunc(queries, pattern)).toEqual(output)
  })
  it('case 2', () => {
    const queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']
    const pattern = 'FoBa'
    const output = [true, false, true, false, false]
    expect(testFunc(queries, pattern)).toEqual(output)
  })
  it('case 3', () => {
    const queries = ['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack']
    const pattern = 'FoBaT'
    const output = [false, true, false, false, false]
    expect(testFunc(queries, pattern)).toEqual(output)
  })
})
