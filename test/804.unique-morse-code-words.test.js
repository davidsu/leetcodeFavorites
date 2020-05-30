const testFuncs = require('../src/804.unique-morse-code-words.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(['gin', 'zen', 'gig', 'msg'])).toEqual(2)
    })
})
