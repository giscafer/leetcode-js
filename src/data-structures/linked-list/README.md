## 链表

> 正确链表代码的六个技巧。分别是理解指针或引用的含义、警惕指针丢失和内存泄漏、利用哨兵简化实现难度、重点留意边界条件处理，以及举例画图、辅助思考，还有多写多练。

- JavaScript 实现链表
- 单链表反转
- 链表中环的检测
- 两个有序的链表合并
- 删除链表倒数第 n 个结点
- 求链表的中间结点
- [约瑟夫问题](https://zh.wikipedia.org/wiki/约瑟夫斯问题)
- 如何基于链表实现 LRU 缓存淘汰算法？
- 除了基于链表的实现思路，实际上还可以用数组来实现 LRU 缓存淘汰策略。如何利用数组实现 LRU 缓存淘汰策略呢？
- 如何判断一个字符串是否是回文字符串的问题，我想你应该听过，我们今天的题目就是基于这个问题的改造版本。如果字符串是通过单链表来存储的，那该如何来判断是一个回文串呢？你有什么好的解决思路呢？相应的时间空间复杂度又是多少呢？

### JavaScript 实现链表

见 [LinkedList.js](./LinkedList.js) 文件源码实现

### 单链表反转

LeetCode 题目：https://leetcode-cn.com/problems/reverse-linked-list/

单链表反转可以用 `双指针迭代`、`递归解法` 、`尾递归`、`栈解` 4 种不同的方法实现。

**(一) 双指针迭代**

[LinkedList.js#L210 中的 reverse()](https://github.com/giscafer/leetcode-js/blob/a5e7d0941bf709f82ac0daf355a57b6572f0d9e9/src/data-structures/linked-list/LinkedList.js#L210) 就是用了双指针迭代的方法实现的。

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var currNode = head;
  var prevNode = null;
  var nextNode = null;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;

    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};
```

**(二) 递归解法**

递归的解法不是那么容易理解，可以配合一些动图来理解。可以参考 leetcode 网友的分析：https://leetcode-cn.com/problems/reverse-linked-list/solution/206-fan-zhuan-lian-biao-by-alexer-660/

```js
var reverseList = function(value) {
  // 空链、单节点、递归跳出条件
  if (head === null || head.next === null) return head;

  let next = head.next;
  // 递归：利用了函数调用执行栈原理，先进后出（最先调用的函数会在递归过程中最后执行，而最后调用的会最先执行）
  let newHead = reverseList(next);

  next.next = head; // head.next 指向的节点的后继指针改为指向 head(反转)
  head.next = null; // 断开原有后继指针（将原 head 指向 head.next 的指针断开）

  return newHead;
};
```
