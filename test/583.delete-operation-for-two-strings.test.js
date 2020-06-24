const testFuncs = require('../src/583.delete-operation-for-two-strings.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('sea', 'eat')).toEqual(2)
    })
})
