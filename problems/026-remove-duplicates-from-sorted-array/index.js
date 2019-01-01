/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 * 解题思路：使用临时的map对象辅助判断是否为重复的值，然后动态删除nums数组重复元素。
 * 可以考虑一下不用map也能实现吧。但要注意的是，题目要求不能开辟新空间，必须基于原数组去修改.
 */


const removeDuplicates = (nums) => {
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

module.exports = removeDuplicates;