const testFuncs = require('../src/109.convert-sorted-list-to-binary-search-tree.js')
describe.each(
    Object.entries(testFuncs)
)('%s', (_, testFunc) => {
    // these testcases are not gr8
    // there are other trees that answer correctly to the problem, eventually need to improve these
    it('case 1', () => {
        const result = testFunc({ val: -10, next: { val: -3, next: { val: 0, next: { val: 5, next: { val: 9, next: null } } } } })
        const expected = { val: 0, left: { val: -10, left: null, right: { val: -3, left: null, right: null } }, right: { val: 5, left: null, right: { val: 9, left: null, right: null } } }
        expect(result).toEqual(expected)
    })
    it('case 2', () => {
        const result = testFunc({ val: -10, next: { val: -3, next: { val: 0, next: { val: 5, next: { val: 9, next: { val: 10, next: { val: 20, next: { val: 30, next: null } } } } } } } })
        const expected = { val: 5, left: { val: -3, left: { val: -10, left: null, right: null }, right: { val: 0, left: null, right: null } }, right: { val: 10, left: { val: 9, left: null, right: null }, right: { val: 20, left: null, right: { val: 30, left: null, right: null } } } }
        expect(result).toEqual(expected)
    })
})
