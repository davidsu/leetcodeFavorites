const testFuncs = require('../src/32.longest-valid-parentheses.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc('(()')).toEqual(2)
    })
    it('case 2', () => {
        expect(testFunc(')()())')).toEqual(4)
    })
    it('case 3', () => {
        expect(testFunc('()()()')).toEqual(6)
    })
    it('case 4', () => {
        expect(testFunc('(())()(())')).toEqual(10)
    })
    it('case 5', () => {
        expect(testFunc('')).toEqual(0)
    })
    it('case 6', () => {
        expect(testFunc('()(()')).toEqual(2)
    })
})
