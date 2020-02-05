const testFuncs = require('../src/57.insert-interval.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        const result = testFunc([[1, 3], [6, 9]], [2, 5])
        console.log('result: ', result)
        expect(result).toEqual([[1, 5], [6, 9]])
    })
    it('case 2', () => {
        expect(testFunc([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]])
    })
})
