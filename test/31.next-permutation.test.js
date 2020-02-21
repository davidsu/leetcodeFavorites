const testFuncs = require('../src/31.next-permutation.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([1, 2, 3])).toEqual([1, 3, 2])
    })
    it('case 2', () => {
        expect(testFunc([3, 2, 1])).toEqual([1, 2, 3])
    })
    it('case 3', () => {
        expect(testFunc([1, 1, 5])).toEqual([1, 5, 1])
    })
    it('case 4', () => {
        expect(testFunc([2, 3, 1])).toEqual([3, 1, 2])
    })
})
