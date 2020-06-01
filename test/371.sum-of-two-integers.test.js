const testFuncs = require('../src/371.sum-of-two-integers.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(1, 2)).toEqual(3)
    })
    it('case 2', () => {
        expect(testFunc(-2, 3)).toEqual(1)
    })
})
