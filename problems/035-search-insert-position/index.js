/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 解题思路：因为数组nums是有序数组，所以很方便，只需要遍历数组，对比每个元素和目标元素的大小。
 * 如果目标元素小于遍历元素，则就是插入位置，大于遍历元素的话，考虑到数组最后一位元素，插入数组末尾的情况。
 */
const searchInsert = (nums, target) => {
    if (nums.length === 0) return 0;
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
        if (nums[i] < target) {
            index = i;
        }
        if (i === nums.length - 1) {
            index += 1;
        }
    }
    return index;
};

module.exports = searchInsert;