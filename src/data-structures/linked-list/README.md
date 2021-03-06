# 链表

> 正确链表代码的六个技巧。分别是理解指针或引用的含义、警惕指针丢失和内存泄漏、利用哨兵简化实现难度、重点留意边界条件处理，以及举例画图、辅助思考，还有多写多练。

<!--ts-->
   * [目录](#链表)
      * [JavaScript 实现链表](#javascript-实现链表)
      * [单链表反转](#单链表反转)
         * [(一) 双指针迭代](#一-双指针迭代)
         * [（二）尾递归](#二尾递归)
         * [(三) 递归解法](#三-递归解法)
         * [（四）栈解](#四栈解)
      * [链表中环的检测](#链表中环的检测)
         * [标记法](#标记法)
         * [Set 集合判断是否有环](#set-集合判断是否有环)
         * [快慢指针](#快慢指针)
      * [两个有序的链表合并](#两个有序的链表合并)
      * [删除链表倒数第 n 个结点](#删除链表倒数第-n-个结点)
      * [求链表的中间结点](#求链表的中间结点)
      * [如何基于链表实现 LRU 缓存淘汰算法？](#如何基于链表实现-lru-缓存淘汰算法)
      * [如果字符串是通过单链表来存储的，那该如何来判断是一个回文串？](#如果字符串是通过单链表来存储的那该如何来判断是一个回文串)
      * [约瑟夫问题](#约瑟夫问题)

<!-- Added by: giscafer, at: Mon Mar 16 21:01:02 CST 2020 -->

<!--te-->

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
  // 所以链表是从尾部开始改变指针的
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
 * 利用哨兵节点迭代，时间复杂度O(n)，空间复杂度O（1）
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

解法：

- 双遍历法：遍历得到链表长度，然后计算中间节点的位置，果有两个中间结点，则返回第二个中间结点。
- 快慢指针法：当用慢指针 slow 遍历列表时，让另一个指针 fast 的速度是它的两倍。当 fast 到达列表的末尾时，slow 必然位于中间。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双遍历法
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let len = 0;
  let temp = head;
  while (temp) {
    len++;
    temp = temp.next;
  }

  let mid = Math.floor(len / 2);
  while (mid--) {
    head = head.next;
  }
  return head;
};
```

解法 2：快慢指针法

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 快慢指针法
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
```

## 如何基于链表实现 LRU 缓存淘汰算法？

`LRU` 是 Least Recently Used，最近最少使用策略。

思路：我们维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头开始顺序遍历链表。

1. 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。

2. 如果此数据没有在缓存链表中，又可以分为两种情况：

- 如果此时缓存未满，则将此结点直接插入到链表的头部；

- 如果此时缓存已满，则链表尾结点删除，将新的数据结点插入链表的头部。

这样我们就用链表实现了一个 LRU 缓存，是不是很简单？

## 如果字符串是通过单链表来存储的，那该如何来判断是一个回文串？

其实就是判断一个链表是否为回文链表，leetcode 相关题目：https://leetcode-cn.com/problems/palindrome-linked-list/

解法：

- 方法一：将值复制到数组中后用双指针法
- 方法二：快慢指针法，快指针走两步，慢指针走一步，找到链表的中点。然后，翻转后半部分。最后从头、中点开始判断是否相同

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法一：将值复制到数组中后用双指针法;
 * 时间复杂度O(n)，空间复杂度O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  // 数组双指针首尾一起遍历，数组访问元素复杂度是O(1)
  let len = vals.length - 1;
  let s = 0;
  while (len >= s) {
    if (vals[s] !== vals[len]) {
      return false;
    }
    len--;
    s++;
  }
  return true;
};
```

解法二：快慢指针法

```js
/**
 * 方法二：快慢指针法
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 得到链表中间结点slow
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 反转中间结点开始的后半链表
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 对比链表前半部分和反转后的后半部分
  while (prev && head) {
    if (head.val !== prev.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true;
};
```

## 约瑟夫问题

[约瑟夫问题](https://zh.wikipedia.org/wiki/约瑟夫斯问题)

约瑟夫环

--- 

- [front-end-manual 前端手册](https://github.com/giscafer/front-end-manual)
- [数据结构与算法学习 & leetcode JavaScript 题解](https://github.com/giscafer/leetcode-js)

![大前端洞见](http://ww1.sinaimg.cn/large/940e68eegy1gcy1r1yeq5j20k008ctas.jpg)
