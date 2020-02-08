const testFuncs = require('../src/33.search-in-rotated-sorted-array.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4)
    })
    it('case 2', () => {
        expect(testFunc([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1)
    })
    it('case 3', () => {
        expect(testFunc([1], 0)).toEqual(-1)
    })
    it('case 4', () => {
        expect(testFunc([1], 1)).toEqual(0)
    })
    it('case 5', () => {
        expect(testFunc([8, 9, 2, 3, 4], 9)).toEqual(1)
    })
})
