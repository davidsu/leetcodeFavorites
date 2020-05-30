const testFuncs = require('../src/961.n-repeated-element-in-size-2n-array.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([1, 2, 3, 3])).toEqual(3)
    })
    it('case 2', () => {
        expect(testFunc([2, 1, 2, 5, 3, 2])).toEqual(2)
    })
    it('case 1', () => {
        expect(testFunc([5, 1, 5, 2, 5, 3, 5, 4])).toEqual(5)
    })
})
