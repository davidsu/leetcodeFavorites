/*
* @lc app=leetcode id=380 lang=javascript
*
* [380] Insert Delete GetRandom O(1)
*
* https://leetcode.com/problems/insert-delete-getrandom-o1/description/
*
* algorithms
* Medium (43.83%)
* Total Accepted:    167.8K
* Total Submissions: 370.8K
* Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +
'[[],[1],[2],[2],[],[1],[2],[]]'
*
* Design a data structure that supports all following operations in average
* O(1) time.
*
*
*
* insert(val): Inserts an item val to the set if not already present.
* remove(val): Removes an item val from the set if present.
* getRandom: Returns a random element from current set of elements. Each
* element must have the same probability of being returned.
*
*
*
* Example:
*
* // Init an empty set.
* RandomizedSet randomSet = new RandomizedSet();
*
* // Inserts 1 to the set. Returns true as 1 was inserted successfully.
* randomSet.insert(1);
*
* // Returns false as 2 does not exist in the set.
* randomSet.remove(2);
*
* // Inserts 2 to the set, returns true. Set now contains [1,2].
* randomSet.insert(2);
*
* // getRandom should return either 1 or 2 randomly.
* randomSet.getRandom();
*
* // Removes 1 from the set, returns true. Set now contains [2].
* randomSet.remove(1);
*
* // 2 was already in the set, so return false.
* randomSet.insert(2);
*
* // Since 2 is the only number in the set, getRandom always return 2.
* randomSet.getRandom();
*
*
*/
/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
  const map = new Map()
  const values = []
  function swap(idx) {
    const lastIdx = values.length - 1
    if (idx === lastIdx) return
    const last = values[lastIdx]
    values[lastIdx] = values[idx]
    map.set(last, idx)
    values[idx] = last
  }
  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  function insert(val) {
    if (map.has(val)) return false
    values.push(val)
    map.set(val, values.length - 1)
    return true
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  function remove(val) {
    if (!map.has(val)) return false
    const idx = map.get(val)
    swap(idx)
    values.pop()
    map.delete(val)
    return true
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  function getRandom() {
    return values[parseInt(Math.random() * values.length)]
  }
  return { insert, remove, getRandom }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = {
  RandomizedSet
}
