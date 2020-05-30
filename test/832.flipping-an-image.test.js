const testFuncs = require('../src/832.flipping-an-image.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]])
    })
    it('case 2', () => {
        expect(testFunc([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]])
    })
})
