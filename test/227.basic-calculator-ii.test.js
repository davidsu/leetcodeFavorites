const testFuncs = require('../src/227.basic-calculator-ii.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('3+2*2')).toEqual(7)
    })
    it('case 2', () => {
        expect(testFunc(' 3/2 ')).toEqual(1)
    })
    it('case 3', () => {
        expect(testFunc(' 3+5 / 2 ')).toEqual(5)
    })
    it('case 4', () => {
        expect(testFunc('0-2147483647')).toEqual(-2147483647)
    })
    it('case 5', () => {
        expect(testFunc('2-3+4')).toEqual(3)
    })
})
