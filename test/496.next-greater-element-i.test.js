const testFuncs = require('../src/496.next-greater-element-i.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        const result = testFunc([4, 1, 2], [1, 3, 4, 2])
        expect(result).toEqual([-1, 3, -1])
    })
    it('case 2', () => {
        const result = testFunc([2, 4], [1, 2, 3, 4])
        expect(result).toEqual([3, -1])
    })
})
