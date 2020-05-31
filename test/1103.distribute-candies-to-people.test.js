const testFuncs = require('../src/1103.distribute-candies-to-people.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(7, 4)).toEqual([1, 2, 3, 1])
    })
    it('case 2', () => {
        expect(testFunc(10, 3)).toEqual([5, 2, 3])
    })
})
