/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    let s1 = s.trim();
    if (!s1) return 0;
    let arr = s1.split(' ');
    const { length } = arr;
    return arr[length - 1].length;
};

module.exports = lengthOfLastWord;