/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/**
 * https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 * 解题思路：不能只用arr.join('')的方式将转为整数再加1，因为数组的长度可能超过了有限位数。
 * 从数组最后一个加1，如果是9，就进1位，考虑到都是9的情况的数组就好。
 */
const plusOne = (digits) => {
    const { length } = digits;
    let lastone = digits[length - 1];
    if (lastone < 9) {
        digits[length - 1] = (lastone + 1);
        return digits;
    }
    if (lastone === 9) {
        let count = length - 2;
        if (count < 0) {
            return [1, 0];
        }
        digits[length - 1] = 0;
        while (count >= 0) {
            let n = digits[count];
            if (n === 9) {
                digits[count] = 0;
                if (count === 0) {
                    digits.unshift(1);
                }
                count -= 1;
            } else {
                n += 1;
                digits[count] = n;
                break;
            }
        }
    }
    return digits;
};

module.exports = plusOne;