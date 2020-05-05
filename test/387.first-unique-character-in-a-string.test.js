const testFuncs = require('../src/387.first-unique-character-in-a-string.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('leetcode')).toEqual(0)
    })
    it('case 2', () => {
        expect(testFunc('loveleetcode')).toEqual(2)
    })
})
