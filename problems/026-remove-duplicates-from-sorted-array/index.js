/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 * 解题思路：使用临时的map对象辅助判断是否为重复的值，然后动态删除nums数组重复元素。
 * 可以考虑一下不用map也能实现吧（双指针法）。要注意的是，题目要求不能开辟新空间，必须基于原数组去修改.
 */


const removeDuplicates = (nums) => {
    if (nums.length == 0) return 0;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            i--;
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

/**
 * 解法2，双指针法
 * @param {Array} nums 
 */
const removeDuplicates2 = (nums) => {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

module.exports = removeDuplicates;