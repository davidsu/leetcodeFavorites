const testFuncs = require('../src/91.decode-ways.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('12')).toEqual(2)
    })
    it('case 2', () => {
        expect(testFunc('226')).toEqual(3)
    })
    it('case 3', () => {
        expect(testFunc('')).toEqual(0)
    })
    it('case 4', () => {
        expect(testFunc('10')).toEqual(1)
    })
    it('case 5', () => {
        expect(testFunc('0')).toEqual(0)
    })
    it('case 6', () => {
        expect(testFunc('01')).toEqual(0)
    })
    it('case 7', () => {
        expect(testFunc('230')).toEqual(0)
    })
})
