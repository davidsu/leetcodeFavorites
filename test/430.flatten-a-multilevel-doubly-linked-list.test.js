const testFuncs = require('../src/430.flatten-a-multilevel-doubly-linked-list.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  function buildList (list) {
    const head = { }
    let runner = head
    for (let i = 0; i < list.length; i++) {
      if (!list[i]) runner = runner.prev
      else if (!list[i - 1]) {
        runner.child = { val: list[i] }
        runner = runner.child
      } else {
        runner.next = { prev: runner, val: list[i] }
        runner.next.prev = runner
        runner = runner.next
      }
    }
    return head.child
  }
  it('case 1', () => {
    const list = buildList([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12])
    const result = testFunc(list)
    let runner = result
    for (const val of [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]) {
      expect(runner.val).toEqual(val)
      runner = runner.next
    }
  })
})
