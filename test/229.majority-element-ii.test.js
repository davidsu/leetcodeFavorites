const { testFunc } = require('../src/229.majority-element-ii.js')
describe('229.majority-element-ii', () => {
    it('case 1', () => {
        expect(testFunc([3, 2, 3])).toEqual([3])
    })

    it('case 2', () => {
        expect(testFunc([1, 1, 1, 3, 3, 2, 2, 2])).toEqual([1, 2])
    })
    it('case 3', () => {
        expect(testFunc([0, 0, 0])).toEqual([0])
    })
    it('case 4', () => {
        expect(testFunc([1, 2, 2, 3, 2, 1, 1, 3]).sort()).toEqual([1, 2])
    })
})
