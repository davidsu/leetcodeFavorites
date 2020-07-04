/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 *
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * algorithms
 * Easy (51.16%)
 * Total Accepted:    26.1K
 * Total Submissions: 51.1K
 * Testcase Example:  '[4,2,3]\n1'
 *
 * Given an array A of integers, we must modify the array in the following way:
 * we choose an i and replace A[i] with -A[i], and we repeat this process K
 * times in total.  (We may choose the same index i multiple times.)
 *
 * Return the largest possible sum of the array after modifying it in this
 * way.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [4,2,3], K = 1
 * Output: 5
 * Explanation: Choose indices (1,) and A becomes [4,-2,3].
 *
 *
 *
 * Example 2:
 *
 *
 * Input: A = [3,-1,0,2], K = 3
 * Output: 6
 * Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
 *
 *
 *
 * Example 3:
 *
 *
 * Input: A = [2,-3,-1,5,-4], K = 2
 * Output: 13
 * Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
 *
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length <= 10000
 * 1 <= K <= 10000
 * -100 <= A[i] <= 100
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// eslint-disable-next-line
function heap(n){const t=[],o=n=>parseInt((n-1)/2),e=n=>2*(n+1)-1,r=n=>e(n)+1,u=n=>n<t.length,s=(n,o)=>{[t[n],t[o]]=[t[o],t[n]]};function c(o){t[0]=o,function o(c){const f=e(c),i=r(c);if(!u(f))return;if(!u(i)){if(n(t[c],t[f])<0)return;return s(c,f),o(f)}const p=n(t[f],t[i])<0?f:i;n(t[c],t[p])>=0&&(s(c,p),o(p))}(0)}const f=()=>t[0];return{push:function(e){let r=t.length;for(t.push(e);r>0&&n(e,t[o(r)])<0;){const n=o(r);s(r,n),r=n}},getRoot:f,pop:function(){const n=f(),o=t.pop();return t.length&&c(o),n},swapRoot:c,nums:t,get size(){return t.length}}}
const largestSumAfterKNegations = function (arr, k) {
  const pq = heap(([aNum, aIdx], [bNum, bIdx]) => aNum - bNum)
  let min = [Infinity, -1]
  pq.push(min)
  arr.forEach((num, idx) => {
    if (num <= 0) pq.push([num, idx])
    else if (num < min[0]) min = [num, idx]
  })
  while (pq.getRoot()[0] < 0 && k > 0) {
    const [, idx] = pq.pop()
    arr[idx] *= -1
    if (pq.size === 0 || pq.getRoot()[0] > 0) pq.push([arr[idx], idx])
    k--
  }
  if (k % 2 === 1) {
    pq.push(min)
    const [num, idx] = pq.pop()
    arr[idx] = -num
  }
  return arr.reduce((sum, num) => sum + num, 0)
}

module.exports = {
  largestSumAfterKNegations
}
