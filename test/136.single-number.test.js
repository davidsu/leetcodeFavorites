const testFuncs = require('../src/136.single-number')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([2, 1, 2])).toEqual(1)
    })
    it('case 2', () => {
        expect(testFunc([4, 1, 2, 1, 2])).toEqual(4)
    })
})
