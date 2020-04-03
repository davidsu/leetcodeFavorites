const testFuncs = require('../src/53.maximum-subarray')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
    })
    it('case 2', () => {
        expect(testFunc([])).toEqual(-2147483648)
    })
})
