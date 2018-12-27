
/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 * 解题思路：本质上就三个字符相互包含：()、[]、{}，这三者之一肯定会出现才是有效括号，可以使用
 * 字符串replace的方式一个个去掉，也可以转为数字后判断左边等于后边逆序，类似回文数一个道理，
 * 也可以通过定义一个Map对象stack = { "{" : "}", "[" : "]", "(" : ")" }，来循环s字符串处理
 * 
 */

const isValid = s => {
    if (s.length % 2 !== 0) return false;

    let count = s.length / 2;

    while (count--) {
        s = s.replace(/\(\)/g, '').replace(/\[\]/g, '').replace(/\{\}/g, '');
    }
    return s === '';
};

module.exports = isValid;