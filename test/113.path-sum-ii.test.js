const { testFunc } = require('../src/113.path-sum-ii.js')
describe('113.path-sum-ii', () => {
  it('should ...', () => {
    const { root, sum } = {
      root: {
        left: {
          left: {
            left: { left: null, right: null, val: 7 },
            right: { left: null, right: null, val: 2 },
            val: 11
          },
          right: null,
          val: 4
        },
        right: {
          left: { left: null, right: null, val: 13 },
          right: {
            left: { left: null, right: null, val: 5 },
            right: { left: null, right: null, val: 1 },
            val: 4
          },
          val: 8
        },
        val: 5
      },
      sum: 22
    }

    expect(testFunc(root, sum)).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5]
    ])
  })
  it('case 2', () => {
    expect(testFunc(null, 1)).toEqual([])
  })
  it('case 3', () => {
    const { root, sum } = {
      root: {
        left: {
          left: {
            left: { left: null, right: null, val: 0 },
            right: { left: null, right: null, val: 1 },
            val: 1
          },
          right: {
            left: { left: null, right: null, val: -1 },
            right: { left: null, right: null, val: 0 },
            val: 2
          },
          val: 0
        },
        right: {
          left: {
            left: { left: null, right: null, val: -1 },
            right: { left: null, right: null, val: 0 },
            val: 0
          },
          right: {
            left: { left: null, right: null, val: 1 },
            right: { left: null, right: null, val: 0 },
            val: -1
          },
          val: 1
        },
        val: 1
      },
      sum: 2
    }
    expect(testFunc(root, sum)).toEqual([
      [1, 0, 1, 0],
      [1, 0, 2, -1],
      [1, 1, 0, 0],
      [1, 1, -1, 1]
    ])
  })
})
