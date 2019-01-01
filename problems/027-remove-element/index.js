/**
 * https://leetcode-cn.com/problems/remove-element/
 * @param {number} val
 * @return {number}
 * 解题思路：双指针方式，慢指针i 和 快指针 j，如果num[j]===val，则移除，否则跳过
 */


const removeElement = (nums, val) => {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};



module.exports = removeElement;