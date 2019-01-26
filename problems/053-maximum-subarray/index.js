
/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 * 解法思路：循环数组，假设第一个元素为最大，逐一加元素求和，如果求和>0则继续求和，否则和为当前元素。
 */
const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let sum = 0;
    nums.forEach(num => {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        // 每次求和后取得最大值
        maxSum = Math.max(maxSum, sum);
    });
    return maxSum;
};

module.exports = maxSubArray;