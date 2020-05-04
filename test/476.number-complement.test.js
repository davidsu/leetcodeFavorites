const testFuncs = require('../src/476.number-complement.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(5)).toEqual(2)
    })
    it('case 2', () => {
        expect(testFunc(1)).toEqual(0)
    })
    it('case 3', () => {
        expect(testFunc(2147483647)).toEqual(0)
    })
})
