
/**
 * 题目描述: https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 * 思路：x转为数组处理，拆分为两个分组，然后reverse一个分组再转为字符串做比较。
 */
const isPalindrome = function (x) {
    if (typeof x !== 'number') throw new Error('x must be a number');
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    if ((x < Math.pow(-2, 31) || x > (Math.pow(2, 31) - 1))) {
        return false;
    }
    const xstr = String(x).split('');
    const { length } = xstr;
    let isEven = length % 2 === 0 || false;
    let arr1;
    let arr2;
    if (isEven) {
        arr1 = xstr.slice(0, length / 2);
        arr2 = xstr.slice(length / 2, length);
    } else {
        arr1 = xstr.slice(0, Math.floor(length / 2));
        arr2 = xstr.slice(Math.floor(length / 2) + 1, length);
    }
    return arr1.join('') === arr2.reverse().join('');
};

/**
 * @param {number} x
 * @return {boolean}
 * 解法2，思路：数字本身反转。（因为js中数值计算问题，会存在21.200000000000728的情况，所以不宜采用此方式）
 * https://leetcode-cn.com/problems/palindrome-number/solution/
 */
const isPalindrome2 = function (x) {
    if (typeof x !== 'number') throw new Error('x must be a number');
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    if ((x < Math.pow(-2, 31) || x > (Math.pow(2, 31) - 1))) {
        return false;
    }
    let revertedNumber = 0;
    let y = x;
    while (y > revertedNumber) {
        revertedNumber = revertedNumber * 10 + (y % 10);
        y /= 10;
        console.log(y, revertedNumber);
    }

    return x === revertedNumber || x === revertedNumber / 10;
};

module.exports = isPalindrome;