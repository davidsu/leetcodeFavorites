const testFuncs = require('../src/234.palindrome-linked-list.js')
describe.each(Object.entries(testFuncs))('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc({ val: 1, next: { val: 2, next: null } })).toEqual(false)
  })
  it('case 2', () => {
    const list = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } }
    expect(testFunc(list)).toEqual(true)
  })
  it('case 3', () => {
    const list = { val: 1, next: { val: 2, next: { val: 1, next: { val: 2, next: { val: 1, next: null } } } } }
    expect(testFunc(list)).toEqual(true)
  })
})
