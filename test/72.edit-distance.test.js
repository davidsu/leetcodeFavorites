const testFuncs = require('../src/72.edit-distance.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('horse', 'ros')).toEqual(3)
    })
    it('case 2', () => {
        expect(testFunc('intention', 'execution')).toEqual(5)
    })
})
