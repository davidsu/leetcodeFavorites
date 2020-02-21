const testFuncs = require('../src/581.shortest-unsorted-continuous-subarray.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([2, 6, 4, 8, 10, 9, 15])).toEqual(5)
    })
    it('case 2', () => {
        expect(testFunc([1, 2, 3, 4])).toEqual(0)
    })
})
