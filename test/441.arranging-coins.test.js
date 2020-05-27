const testFuncs = require('../src/441.arranging-coins.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc(5)).toEqual(2)
    })
    it('case 2', () => {
        expect(testFunc(8)).toEqual(3)
    })
    it('case 3', () => {
        expect(testFunc(1804289383)).toEqual(60070)
    })
})
