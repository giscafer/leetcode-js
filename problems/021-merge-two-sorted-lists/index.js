/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 解题思路：此题需要熟悉链表数据结构，了解就不会有难度了。此题无测试用例
 * 链表数据结构实现：https://gist.github.com/giscafer/405d146bfbde600038c7f4e8e8fdf210
 */
/* eslint-disable */
const mergeTwoLists = (l1, l2) => {
    if (l1 === null && l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val >= l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
};

module.exports = mergeTwoLists;