const testFuncs = require('../src/61.rotate-list.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    it('case 1', () => {
        expect(testFunc({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }, 2))
            .toEqual({ val: 4, next: { val: 5, next: { val: 1, next: { val: 2, next: { val: 3, next: null } } } } })
    })
    it('case 2', () => {
        const result = testFunc({ val: 0, next: { val: 1, next: { val: 2, next: null } } }, 4)
        expect(result)
            .toEqual({ val: 2, next: { val: 0, next: { val: 1, next: null } } })
    })
})
