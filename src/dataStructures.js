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
    while (idx > 0 && compare(num, nums[getParent(idx)]) < 0) {
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
      if (compare(nums[idx], nums[left]) < 0) return
      swap(idx, left)
      return bubbleDown(left)
    }
    const next = compare(nums[left], nums[right]) < 0 ? left : right
    const shouldSwap = compare(nums[idx], nums[next]) >= 0
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
module.exports = {
  heap
}
