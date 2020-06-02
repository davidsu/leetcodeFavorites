/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 *
 * https://leetcode.com/problems/find-median-from-data-stream/description/
 *
 * algorithms
 * Hard (38.72%)
 * Total Accepted:    129.9K
 * Total Submissions: 335.5K
 * Testcase Example:  '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n' +
  '[[],[1],[2],[],[3],[]]'
 *
 * Median is the middle value in an ordered integer list. If the size of the
 * list is even, there is no middle value. So the median is the mean of the two
 * middle value.
 * For example,
 *
 * [2,3,4], the median is 3
 *
 * [2,3], the median is (2 + 3) / 2 = 2.5
 *
 * Design a data structure that supports the following two operations:
 *
 *
 * void addNum(int num) - Add a integer number from the data stream to the data
 * structure.
 * double findMedian() - Return the median of all elements so far.
 *
 *
 *
 *
 * Example:
 *
 *
 * addNum(1)
 * addNum(2)
 * findMedian() -> 1.5
 * addNum(3)
 * findMedian() -> 2
 *
 *
 *
 *
 * Follow up:
 *
 *
 * If all integer numbers from the stream are between 0 and 100, how would you
 * optimize it?
 * If 99% of all integer numbers from the stream are between 0 and 100, how
 * would you optimize it?
 *
 *
 */
/**
 * initialize your data structure here.
 */
function heap(compare) {
  const nums = []
  const getParent = idx => parseInt((idx - 1) / 2)
  const getLeft = idx => (idx + 1) * 2 - 1
  const getRight = idx => getLeft(idx) + 1
  const exists = idx => idx < nums.length
  const swap = (i, j) => {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  function push(num) {
    let idx = nums.length
    nums.push(num)
    while (idx > 0 && compare(num, nums[getParent(idx)])) {
      const parent = getParent(idx)
      swap(idx, parent)
      idx = parent
    }
  }
  function bubbleDown(idx) {
    const left = getLeft(idx)
    const right = getRight(idx)
    if (!exists(left)) return
    if (!exists(right)) {
      if (compare(nums[idx], nums[left])) return
      swap(idx, left)
      return bubbleDown(left)
    }
    const next = compare(nums[left], nums[right]) ? left : right
    const shouldSwap = !compare(nums[idx], nums[next])
    if (shouldSwap) {
      swap(idx, next)
      bubbleDown(next)
    }
  }
  function swapRoot(rootVal) {
    nums[0] = rootVal
    bubbleDown(0)
  }
  function pop() {
    const root = getRoot()
    const next = nums.pop()
    if (nums.length) {
      swapRoot(next)
    }
    return root
  }
  const getRoot = () => nums[0]
  return {
    push,
    getRoot,
    pop,
    swapRoot,
    nums,
    get size() {
      return nums.length
    }
  }
}
const minHeapFactory = () => heap((a, b) => a < b)
const maxHeapFactory = () => heap((a, b) => a > b)
const MedianFinder = function () {
  const minHeap = minHeapFactory()
  const maxHeap = maxHeapFactory()
  function addNum(num) {
    minHeap.push(num)
    if (minHeap.size > maxHeap.size) {
      maxHeap.push(minHeap.pop())
    } else if (minHeap.getRoot() < maxHeap.getRoot()) {
      addNum(maxHeap.pop())
    }
  }
  function findMedian() {
    const size = minHeap.size + maxHeap.size
    if (size % 2) {
      return maxHeap.getRoot()
    }
    return (minHeap.getRoot() + maxHeap.getRoot()) / 2
  }
  return { addNum, findMedian }
}

module.exports = {
  MedianFinder,
  minHeapFactory,
  maxHeapFactory
}
