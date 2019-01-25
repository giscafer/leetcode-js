/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 解题思路1：根据needle的长度，haystack字符自由连续组合同样长度的种数中循环查询
 * 解题思路2：KMP算法：https://segmentfault.com/a/1190000008575379
 */
const strStr = (haystack, needle) => {
    if (!needle) return 0;
    const { length } = needle;
    if (length > haystack.length) return -1;
    if (length === haystack.length) {
        return haystack === needle ? 0 : -1;
    }
    let arr = [];
    for (let i = 0; i < haystack.length; i++) {
        let count = i;
        let item = '';
        while (count < (i + length) && i !== (haystack.length - 1)) {
            item += haystack[count];
            count += 1;
        }
        if (item) {
            arr.push(item);
        }

    }
    // console.log(arr)
    return arr.indexOf(needle);
};

module.exports = strStr;