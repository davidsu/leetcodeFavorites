const testFuncs = require('../src/1019.next-greater-node-in-linked-list.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  function buildList (arr) {
    const head = { val: arr.shift() }
    let tail = head
    for (const val of arr) {
      tail.next = { val }
      tail = tail.next
    }
    return head
  }
  it('case 1', () => {
    const head = buildList([2, 7, 4, 3, 5])
    expect(testFunc(head)).toEqual([7, 0, 5, 5, 0])
  })
  it('case 2', () => {
    const head = buildList([2, 1, 5])
    expect(testFunc(head)).toEqual([5, 5, 0])
  })
  it('case 3', () => {
    const head = buildList([1, 7, 5, 1, 9, 2, 5, 1])
    expect(testFunc(head)).toEqual([7, 9, 9, 9, 0, 5, 0, 0])
  })
})
