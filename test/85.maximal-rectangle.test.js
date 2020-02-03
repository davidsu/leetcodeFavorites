const testFuncs = require('../src/85.maximal-rectangle.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc([
            ['1', '0', '1', '0', '0'],
            ['1', '0', '1', '1', '1'],
            ['1', '1', '1', '1', '1'],
            ['1', '0', '0', '1', '0']
        ])).toEqual(6)
    })

    it('case 2', () => {
        expect(testFunc([])).toEqual(0)
    })
})
