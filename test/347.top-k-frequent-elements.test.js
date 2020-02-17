const testFuncs = require('../src/347.top-k-frequent-elements.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    })
    it('case 2', () => {
        expect(testFunc([1], 1)).toEqual([1])
    })
    it('case 3', () => {
        expect(testFunc([-1, -1], 1)).toEqual([-1])
    })
})
