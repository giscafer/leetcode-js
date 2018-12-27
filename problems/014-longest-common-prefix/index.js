/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 * 解题思路：将数组进行排序，然后用第一个最短字符的数字作为组合字符判断。遍历数组strs，如果都一样的前缀就取出，需要注意的是空字符串数组和长度为0的数组
 */
const longestCommonPrefix = (strs) => {
    // 长度为0的数组
    if (!Array.isArray(strs) || !strs.length) return '';
    let prefix = '';
    // 长度为1和
    if (strs.length === 1) {
        return strs[0];
    }
    // 按字符个数短到长排序
    const strsTemp = strs.sort((a, b) => (a.length - b.length));
    const firstChars = strsTemp[0].split('');
    if (!firstChars.length) return prefix;
    let map = {
        [strsTemp[0]]: 1
    };
    firstChars.reduce((pre, cur) => {
        map[pre] = 1;
        return pre + cur;
    });
    let keys = Object.keys(map).sort((a, b) => a.length - b.length);

    keys.slice().forEach((key, index) => {
        // 记录是否通过每个元素相同前缀检测
        let count = 0;
        strsTemp.forEach(s => {
            if (s.startsWith(key)) {
                count += 1;
            }
        });
        if (count === strsTemp.length) {
            prefix = key;
        }
    });
    return prefix;
};

module.exports = longestCommonPrefix;