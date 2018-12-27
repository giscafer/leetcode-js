
/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * 解题思路：
 * 首先建立一个HashMap来映射符号和值，然后对字符串从左到右来，如果当前字符代表的值不小于其右边，就加上该值；
 * 否则就减去该值。以此类推到最左边的数，最终得到的结果即是答案
 */

const romanObj = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
};

const romanToInt = s => {
    let result = 0;
    const chars = s.split('');
    const firstChar = chars[0];
    const { length } = chars;

    // I开头和V开头的都是个位数
    if (firstChar === 'I' || firstChar === 'V') {
        return romanObj[s];
    }
    // 如果总字符只有两个
    if (length === 2) {
        // 已给出值的搭配
        if (romanObj[s]) {
            return romanObj[s];
        }
        // 其他
        return romanObj[firstChar] + romanObj[chars[1]];
    }

    // 超过3位字符时 MMCCCXCIX
    let skipIndex = 0; // 两两有结果就跳过一次循环
    let skipEnd = false; // 最后两个元素正好匹配

    const lastChar = chars.reduce((pre, cur, index, arr) => {
        if (skipIndex === index) return cur;

        if (romanObj[pre] - romanObj[cur] < 0) {
            result += (romanObj[cur] - romanObj[pre]);
            skipIndex = index + 1;
            if (index === (length - 1)) skipEnd = true;
            // console.log(`${pre} ${romanObj[pre]} 小于0 `, cur, result);
        } else if (index === 1) {
            result = romanObj[pre];
            // console.log(`${pre} ${romanObj[pre]} ：index=1`, cur, result);
        } else {
            result += romanObj[pre];
            // console.log(`${pre} ${romanObj[pre]}`, cur, result);
        }

        return cur;
    });
    // 单字符匹配的次数是奇数的时候，最后一个字符再计算（因为循环里边一直用pre计数）
    if (!skipEnd) {
        result += romanObj[lastChar];
    }

    return result;
};

module.exports = romanToInt;