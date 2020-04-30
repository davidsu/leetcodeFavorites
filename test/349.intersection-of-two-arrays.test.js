const testFuncs = require('../src/349.intersection-of-two-arrays.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([1, 2, 2, 1], [2, 2])).toEqual([2])
    })
    it('case 2', () => {
        const result = testFunc([4, 9, 5], [9, 4, 9, 8, 4])
        expect(result.sort()).toEqual([9, 4].sort())
    })
})
