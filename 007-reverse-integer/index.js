/**
 * 题目来源：https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    if (typeof x !== 'number') throw new Error('x must be number');
    if ((x < (-2) ** 31 || x > (2 ** 31 - 1)) || x === 0) {
        return 0;
    }
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
    }
    let y = String(Math.abs(x)).split('').reverse().join('');
    if (y >= (2 ** 31 - 1)) {
        return 0;
    }
    if (isNegative) {
        return 0 - y;
    }
    return y - 0;
};


console.log(reverse(123))
console.log(reverse(-234))
console.log(reverse(-120))
console.log(reverse(1534236469))