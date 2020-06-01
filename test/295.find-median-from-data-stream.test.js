const { minHeapFactory, MedianFinder } = require('../src/295.find-median-from-data-stream.js')
describe('heap', () => {
  it('minHeap addNum', () => {
    const heap = minHeapFactory()
    heap.push(1)
    heap.push(2)
    expect(heap.getRoot()).toEqual(1)
    heap.push(0)
    expect(heap.getRoot()).toEqual(0)
  })
  it('minHeap swapRoot', () => {
    const heap = minHeapFactory()
    heap.push(1)
    heap.push(2)
    expect(heap.getRoot()).toEqual(1)
    heap.push(0)
    expect(heap.getRoot()).toEqual(0)
    heap.swapRoot(-1)
    expect(heap.getRoot()).toEqual(-1)
    heap.swapRoot(3)
    expect(heap.getRoot()).toEqual(1)
  })
})
describe('MedianFinder', () => {
  it('case 1', () => {
    const { addNum, findMedian } = MedianFinder()
    addNum(1)
    addNum(2)
    expect(findMedian()).toEqual(1.5)
    addNum(3)
    expect(findMedian()).toEqual(2)
  })
  it('case 2', () => {
    const { addNum, findMedian } = MedianFinder()
    addNum(-1)
    expect(findMedian()).toEqual(-1)
    addNum(-2)
    expect(findMedian()).toEqual(-1.5)
    addNum(-3)
    expect(findMedian()).toEqual(-2)
    addNum(-4)
    expect(findMedian()).toEqual(-2.5)
    addNum(-5)
    expect(findMedian()).toEqual(-3)
  })
  it('case 3', () => {
    const { addNum, findMedian } = MedianFinder()
    addNum(1)
    expect(findMedian()).toEqual(1)
    addNum(2)
    expect(findMedian()).toEqual(1.5)
    addNum(3)
    expect(findMedian()).toEqual(2)
    addNum(4)
    expect(findMedian()).toEqual(2.5)
    addNum(5)
    expect(findMedian()).toEqual(3)
    addNum(6)
    expect(findMedian()).toEqual(3.5)
    addNum(7)
    expect(findMedian()).toEqual(4)
    addNum(8)

    expect(findMedian()).toEqual(4.5)
    addNum(9)
    expect(findMedian()).toEqual(5)
    addNum(10)
    expect(findMedian()).toEqual(5.5)
  })
})
