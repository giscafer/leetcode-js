# 链表

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

## JavaScript 实现链表

见 [LinkedList.js](./LinkedList.js) 文件源码实现

## 单链表反转

LeetCode 题目：https://leetcode-cn.com/problems/reverse-linked-list/

单链表反转可以用 `双指针迭代`、`递归解法` 、`尾递归`、`栈解` 4 种不同的方法实现。

### (一) 双指针迭代

[LinkedList.js#L210 中的 reverse()](https://github.com/giscafer/leetcode-js/blob/a5e7d0941bf709f82ac0daf355a57b6572f0d9e9/src/data-structures/linked-list/LinkedList.js#L210) 就是用了双指针迭代的方法实现的。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
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

### （二）尾递归

尾递归其实是将双指针解法进行改写，使用尾递归代替迭代。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const reverse = (prev, curr) => {
    if (!curr) return prev;
    let next = curr.next;
    curr.next = prev;
    return reverse(curr, next);
  };

  return reverse(null, head);
};
```

### (三) 递归解法

递归的解法不是那么容易理解，可以配合一些动图来理解。可以参考 leetcode 网友的分析：https://leetcode-cn.com/problems/reverse-linked-list/solution/206-fan-zhuan-lian-biao-by-alexer-660/

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

### （四）栈解

通过栈结构的特点，先进后出的方式，入栈后再出栈来创建一个新的链表。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let stack = [];
  let curr = head;
  // 哨兵节点
  let tHead = new ListNode(null);
  let pre = newHead;
  // 入栈
  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
  }
  // 出栈创建新的链表
  while (stack.length !== 0) {
    pre.next = new ListNode(stack.pop());
    pre = pre.next;
  }

  return tHead.next; // 哨兵的next即为反转链表的新head
};
```

## 链表中环的检测

可以想象，单链表就像一条平行直线，如果没有环，肯定会有个 tail 节点，next 指向 null。如果出现了环，在循环遍历的时候就会出现重复的值。
解法：

- 遍历链表 0.5 秒，可以找到 tail 节点，就没有环 （最笨的方法）
- 标记法，没遍历一个节点，标记 head.flag = 1；时间复杂度：O(n)
- 用 Set 集合来存储每次遍历的节点，遍历的次数和 Set 集合元素个数不一致时，就表示出现了环（或者用数组判重的方式）。时间复杂度：O(n)，空间复杂度 O(n)
- 龟兔赛跑，如果跑道出现环，兔子总会重新遇到乌龟。用快慢指针遍历链表，快慢指针会重新相遇。（最优解），时间复杂度：O(n)，空间复杂度 O(1)

LeetCode 有两个关于环形链表的题目:

- [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)
- [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

### 标记法

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCircle = function(head) {
  while (head && head.next) {
    if (head.flag) {
      return true;
    } else {
      head.flag = 1;
      head = head.next;
    }
  }
  return false;
};
```

### Set 集合判断是否有环

用数组判断是否存在重复元素也可以。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCircle = function(head) {
  //边界条件
  if (head == null || head.next == null) {
    return false;
  }
  let currNode = head;
  let set = new Set();
  while (currNode) {
    if (set.has(currNode)) {
      return true;
    } else {
      set.add(currNode);
    }
    currNode = currNode.next;
  }
  return false;
};
```

### 快慢指针

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCircle = function(head) {
  //边界条件
  if (head == null || head.next == null) {
    return false;
  }
  // 快慢指针
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
```

## 两个有序的链表合并

LeetCode 相关题目：

- [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
-

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

```
示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 时间复杂度O(n)，空间复杂度O（1）
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let tHead = new ListNode(-1); // 哨兵
  let prev = tHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // l1 和 l2 不会同时为空，需要将遗留的链拼接到最后
  prev.next = l1 === null ? l2 : l1;

  return tHead.next;
};
```

解法 2，递归

```js
/**
 * 时间复杂度O(n)，空间复杂度O（n）
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
```

## 删除链表倒数第 n 个结点

> https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

解法有几种：

- 两次遍历算法：倒数转为顺数的方式，倒数第 n 个节点，其实就是顺数第 L-n+1 个节点（L 为链表长度）；
- 一次遍历算法（双指针）

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 一次遍历算法（双指针），时间复杂度O(n)，空间复杂度O(1)
 * @param {ListNode} head
 * @param {number} n (n保证是有效的)
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let tHead = new ListNode(-1); // 哨兵节点，避免删除head的情况；
  tHead.next = head;
  let slow = tHead;
  let fast = tHead;
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return tHead.next;
};
```

## 求链表的中间结点

> https://leetcode-cn.com/problems/middle-of-the-linked-list/

