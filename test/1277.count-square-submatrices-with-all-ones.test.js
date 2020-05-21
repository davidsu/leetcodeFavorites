const testFuncs = require('../src/1277.count-square-submatrices-with-all-ones.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(
            [
                [0, 1, 1, 1],
                [1, 1, 1, 1],
                [0, 1, 1, 1]
            ]

        )).toEqual(15)
    })
    it('case 2', () => {
        expect(testFunc(
            [[1, 0, 1], [1, 1, 0], [1, 1, 0]]
        )).toEqual(7)
    })
})
