const testFuncs = require('../src/1361.validate-binary-tree-nodes.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const n = 4; const leftChild = [1, -1, 3, -1]; const rightChild = [2, -1, -1, -1]
    expect(testFunc(n, leftChild, rightChild)).toEqual(true)
  })
  it('case 2', () => {
    const n = 4; const leftChild = [1, -1, 3, -1]; const rightChild = [2, 3, -1, -1]
    expect(testFunc(n, leftChild, rightChild)).toEqual(false)
  })
  it('case 3', () => {
    const n = 2; const leftChild = [1, 0]; const rightChild = [-1, -1]
    expect(testFunc(n, leftChild, rightChild)).toEqual(false)
  })
  it('case 4', () => {
    const n = 6; const leftChild = [1, -1, -1, 4, -1, -1]; const rightChild = [2, -1, -1, 5, -1, -1]
    expect(testFunc(n, leftChild, rightChild)).toEqual(false)
  })
  it('case 5', () => {
    const n = 4
    const leftChild = [1, 2, 0, -1]
    const rightChild = [-1, -1, -1, -1]
    expect(testFunc(n, leftChild, rightChild)).toEqual(false)
  })
  it('case 6', () => {
    expect(testFunc(1, [-1], [-1])).toBe(true)
  })
})
