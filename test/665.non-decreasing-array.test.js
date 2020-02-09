const testFuncs = require('../src/665.non-decreasing-array.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([4, 2, 3])).toEqual(true)
    })
    it('case 2', () => {
        expect(testFunc([4, 2, 1])).toEqual(false)
    })
    it('case 3', () => {
        expect(testFunc([4, 3, 2])).toEqual(false)
    })
})
