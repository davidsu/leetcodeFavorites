const testFuncs = require('../src/696.count-binary-substrings.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('00110011')).toEqual(6)
    })
    it('case 2', () => {
        expect(testFunc('10101')).toEqual(4)
    })
    it('case 3', () => {
        expect(testFunc('00100')).toEqual(2)
    })
})
