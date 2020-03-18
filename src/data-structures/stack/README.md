# 栈

<!--ts-->

- [栈](#栈)
  - [参考资料](#参考资料)
  - [实现一个栈](#实现一个栈)
  - [栈在软件工程中的实际应用有哪些？](#栈在软件工程中的实际应用有哪些)
  - [如何实现浏览器的前进、后退功能？](#如何实现浏览器的前进后退功能)
  - [讲到用函数调用栈来保存临时变量，为什么函数调用要用“栈”来保存临时变量呢？用其他数据结构不行吗？](#讲到用函数调用栈来保存临时变量为什么函数调用要用栈来保存临时变量呢用其他数据结构不行吗)
  - [JVM 内存管理中有个“堆栈”的概念。栈内存用来存储局部变量和方法调用，堆内存用来存储 Java 中的对象。那 JVM 里面的“栈”跟我们这里说的“栈”是不是一回事呢？如果不是，那它为什么又叫作“栈”呢？](#jvm-内存管理中有个堆栈的概念栈内存用来存储局部变量和方法调用堆内存用来存储-java-中的对象那-jvm-里面的栈跟我们这里说的栈是不是一回事呢如果不是那它为什么又叫作栈呢)
  - [leetcode 上关于栈的题目：20,155,232,844,224,682,496。](#leetcode-上关于栈的题目20155232844224682496)
    - [20. 有效的括号](#20-有效的括号)
    - [155. 最小栈](#155-最小栈)
    - [232. 用栈实现队列](#232-用栈实现队列)
    - [844. 比较含退格的字符串](#844-比较含退格的字符串)
    - [224. 基本计算器](#224-基本计算器)
      - [最优解](#最优解)
    - [682. 棒球比赛](#682-棒球比赛)
    - [496. 下一个更大元素 I](#496-下一个更大元素-i)

<!--te-->

在计算机科学中, 一个 **栈(stack)** 是一种抽象数据类型,用作表示元素的集合,具有两种主要操作:

- **push**, 添加元素到栈的顶端(末尾);
- **pop**, 移除栈最顶端(末尾)的元素.

以上两种操作可以简单概括为“后进先出(LIFO = last in, first out)”。

此外,应有一个 `peek` 操作用于访问栈当前顶端(末尾)的元素。

"栈"这个名称,可类比于一组物体的堆叠(一摞书,一摞盘子之类的)。

栈的 push 和 pop 操作的示意

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

> **栈是一种“操作受限”的线性表**，只允许在一端插入和删除数据。当某个数据集合只涉及在一端插入和删除数据，并且满足后进先出、先进后出的特性，我们就应该首选“栈”这种数据结构。

## 实现一个栈

用数组实现的栈叫作**顺序栈**，用链表实现的栈叫**链式栈**。

顺序栈模拟：[./ArrayStack.js](./ArrayStack.js)
链式栈模拟：[./Stack.js](./Stack.js)

## 栈在软件工程中的实际应用有哪些？

- 函数调用栈
- 表达式求值计算，如 `4+5*8-6`
- 括号匹配
- HTMLParser（浏览器 HTML 解析器）词法分析，Token 分词

## 如何实现浏览器的前进、后退功能？

使用两个栈数据结构 X、Y 来存储浏览的页面，把首次浏览的页面压入栈 X，点击后退按钮时，从栈 X 出栈，并将出栈的数据一次放入栈 Y。当点击前进按钮时，依次从 Y 中取出数据，放入 X 中。当 X 中没有数据，就表示没有页面继续可以后退预览了。当 Y 中没有数据时，就说明没有页面可以继续点击前进预览了。
当点击前进按钮时，从 Y 取出数据放到 X 中，如果在中间打开了新的页面 c，这时候新页面 c 就会压入 X 栈，而 Y 栈全部清空，此时已经不能通过点击前进按钮预览之前 Y 存储的页面了，因为被清除了。

## 讲到用函数调用栈来保存临时变量，为什么函数调用要用“栈”来保存临时变量呢？用其他数据结构不行吗？

- ”栈“数据结构是“受限制”操作的数据结构，避免了操作灵活的不可控性，只允许在一端进行插入和删除数据。
- 先进后出，后进先出的特点，符合函数调用执行上下文，作用域链的情况。当一个函数 A 内部又调用了函数 B，这种情况，A 先入栈，然后再 B 入栈；根据函数执行的规则，B 函数执行完毕后才会继续执行 A 函数，所以 B 函数先销毁（出栈），然后再到 A 函数销毁（出栈），这个过程就比较符合“栈”的先进后出的特点。

## JVM 内存管理中有个“堆栈”的概念。栈内存用来存储局部变量和方法调用，堆内存用来存储 Java 中的对象。那 JVM 里面的“栈”跟我们这里说的“栈”是不是一回事呢？如果不是，那它为什么又叫作“栈”呢？

> 来自网友:阿杜 S 考特 的回答和自己修改的不愁

- JVM 内存管理总的“堆栈”和数据结构的“栈”并不是一回事，JVM 中的“堆栈”都是真实存在的物理区，而数据结构中的堆栈是抽象的数据结构。
- 内存空间在逻辑上分为三部分：代码区、静态数据区和动态数据区，动态数据区又分为栈区和堆区。
  - 代码区：存储方法体的二进制代码。高级调度（作业调度）、中级调度（内存调度）、低级调度（进程调度）控制代码区执行代码的切换。
  - 静态数据区：存储全局变量、静态变量、常量，常量包括 final 修饰的常量和 String 常量。系统自动分配和回收。
  - 栈区：存储运行方法的形参、局部变量、返回值。由系统自动分配和回收。
  - 堆区：new 一个对象的引用或地址存储在栈区，指向该对象存储在堆区中的真实数据。
- JavaScript V8 的内存管理中，栈存储函数执行上下文，而函数执行上下文又包括变量环境和词法环境、可执行代码三部分。其中变量环境就是存储函数内部作用域下的变量，词法环境存储的是 let\const 等声明的变量。JavaScript 的基本数据类型都存储在变量环境或者词法环境中。而对于引用类型的数据，比如 Object 等，存储在“堆”空间，通过“栈”空间的变量引用地址查找对应堆空间的值。

## leetcode 上关于栈的题目：20,155,232,844,224,682,496。

下边是 leetcode 题解

### 20. 有效的括号

给定一个只包括 `'('，')'，'{'，'}'，'['，']'`  的字符串，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。
- 注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses

```js
/**
 * 实现思路：使用栈来依次读取左括号并压入栈中，当读取到右括号，则从栈中pop出左括号与之对比，
 * 如果不匹配，则不合法；如果匹配，则继续读取括号字符串继续压入栈或判断。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 过滤掉空字符串、空格字符串的情况
  let arr = s.split('').filter(item => item.trim());
  if (arr.length === 0) {
    return true;
  }
  let stack = [];
  if (arr.length % 2 !== 0) {
    // 不是偶数的
    return false;
  }
  // 如果第一个字符为右括号的情况
  if (arr[0] == ')' || arr[0] === ']' || arr[0] === '}') {
    return false;
  }
  // 将第一个括号提前存入栈，然后遍历从第二个字符开始
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let right = arr[i];
    // 如果是左括号就入栈，读取到右括号就对比栈顶的括号字符，是否是闭合的括号，如果不是则为无效，对称则继续遍历。
    if (right === ')' || right === ']' || right === '}') {
      let left = stack.pop();
      if (right === ')' && left === '(') {
        continue;
      }
      if (right === ']' && left === '[') {
        continue;
      }
      if (right === '}' && left === '{') {
        continue;
      }
      return false;
    } else {
      stack.push(right);
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
```

### 155. 最小栈

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) -- 将元素 x 推入栈中。
- pop() -- 删除栈顶的元素。
- top() -- 获取栈顶元素。
- getMin() -- 检索栈中的最小元素。

示例:

```js
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack

```js
/**
 * 辅助栈解决问题，时间复杂度O(1)，空间复杂度O(n)
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min_stack = []; // 辅助栈
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min_stack.length === 0 || this.min_stack[this.min_stack.length - 1] >= x) {
    this.min_stack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.min_stack[this.min_stack.length - 1]) {
    this.min_stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

还可以只用一个基栈来解决问题。

### 232. 用栈实现队列

使用栈实现队列的下列操作：

- push(x) -- 将一个元素放入队列的尾部。
- pop() -- 从队列首部移除元素。
- peek() -- 返回队列首部的元素。
- empty() -- 返回队列是否为空。

LeetCode 链接：https://leetcode-cn.com/problems/implement-queue-using-stacks/

```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 844. 比较含退格的字符串

给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

https://leetcode-cn.com/problems/backspace-string-compare/

```js
/**
 * 解法：使用栈来存储字母，#号代表出栈操作
 * 空间复杂度O(n)，时间复杂度O(n)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let stackS = [];
  let stackT = [];

  for (let c of S) {
    if (c === '#') {
      stackS.pop();
    } else {
      stackS.push(c);
    }
  }

  for (let c of T) {
    if (c === '#') {
      stackT.pop();
    } else {
      stackT.push(c);
    }
  }

  return stackS.toString() === stackT.toString();
};
```

### 224. 基本计算器

实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格 。

https://leetcode-cn.com/problems/basic-calculator/

暴力解法，使用两个栈来做运算，数字栈和运算符栈。当运算符入栈的时候判断之前的运算符是否需要计算，来取出数字栈的数字计算后再将结果放入数字栈中。

```js
var calculate = function(s) {
  let stack = []; // 数字栈
  let operator_stack = []; // 运算符栈
  let i = 0;
  let n = s.length;
  while (i < n) {
    let c = s.charAt(i).trim();
    i++;

    let peek = operator_stack[operator_stack.length - 1];
    if (c === '(') {
      operator_stack.push(c);
    } else if (c === ')') {
      operCaculate(peek, operator_stack, c);
    } else if (c === '+' || c === '-') {
      operCaculate(peek, operator_stack, c);
    } else if (c !== '') {
      let temp = c;
      // 考虑非个位整数的情况，比如 2147483647
      while (i < n && isNumber(s.charAt(i))) {
        temp += s.charAt(i);
        i++;
      }
      // 纯数字
      stack.push(Number(temp));
    }
  }

  if (operator_stack.length > 0) {
    let oper = operator_stack.pop();
    if (oper === '-') {
      // 加法和减法遵循从左到右执行，先运行减法运算得到结果再入栈
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (oper === '+') {
      // 加法和减法遵循从左到右执行，先运行加法运算得到结果再入栈
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b + a);
    }
  }

  return stack.pop();

  function operCaculate(peek, operator_stack, c) {
    if (!peek) {
      // 运算符栈为空的时候，表示还没做过运算
      operator_stack.push(c);
      return;
    } else if (peek === '-') {
      // 加法和减法遵循从左到右执行，先运行减法运算得到结果再入栈
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
      operator_stack.pop();
    } else if (peek === '+') {
      // 加法和减法遵循从左到右执行，先运行加法运算得到结果再入栈
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b + a);
      operator_stack.pop();
    }
    if (c === ')') {
      operator_stack.pop();
      return;
    }
    operator_stack.push(c);
  }
};

function isNumber(n) {
  n = Number(n);
  return typeof n === 'number' && !isNaN(n);
}

console.log(calculate('2147483647')); // 2147483647
console.log(calculate('1+1')); // 2
console.log(calculate('2-1 + 2 +1-1-4')); // -1
console.log(calculate('(1+(4+5+2)-3)+(6+8)')); //23
```

#### 最优解

```
栈 参考 「powcai」的解题思路

自己憋了半天总有 bug，还不如学下大佬的思路

稍微理解 + 解释下思路，一共有几种情况：

--------------------------------------

空格 -> 直接跳过

减号 -> 更新运算符号为 -1
加号 -> 更新运算符号为 1
「
  符号存为 1(+) 和 -1(-) 的好处是计算起来比较清晰
  如果是加：5 + 3 * 1  => 即为 5 + 3 的效果
  如果是减：5 + 3 * -1 => 即为 5 - 3 的效果
  优化了 if...else 语句，否则，if (sign === '+')  if (sign === '-')
」

左括号 -> 将当前的 sum 和 符号保存到 stack 中，为了后面遇到右括号时的计算，
后面计算的结果和栈里的值做运算的时候，只需要让后面运算的值 * 刚刚保存的符号 + sum

右括号 -> 执行 curr = curr * stack.pop(){ 这是上面刚刚保存的符号 } +
stack.pop(){ 这是上面刚刚保存的运算结果 }

数字 -> 利用一个临时变量 temp 存储所有连续的数字，直到数字不再连续，
用前面的总运算结果 sum 和 temp 进行运算即可

作者：ignore_express
链接：https://leetcode-cn.com/problems/basic-calculator/solution/js-xue-xi-da-lao-si-lu-powcai-by-ignore_express/

```

```js
var calculate = function(s) {
  let sum = 0,
    stack = [],
    sign = 1,
    i = 0,
    n = s.length;

  while (i < n) {
    let c = s.charAt(i);
    if (c === ' ') {
      i++;
    } else if (c === '-') {
      sign = -1;
      i++;
    } else if (c === '+') {
      sign = 1;
      i++;
    } else if (c === '(') {
      stack.push(sum, sign);
      sum = 0;
      sign = 1;
      i++;
    } else if (c === ')') {
      sum = sum * stack.pop() + stack.pop();
      i++;
    } else {
      let temp = c;
      i++;
      while (i < n && isNumber(s.charAt(i))) {
        temp += s.charAt(i);
        i++;
      }
      sum += Number(temp) * sign;
    }
  }

  return sum;
};

function isNumber(n) {
  n = Number(n);
  return typeof n === 'number' && !isNaN(n);
}
```

### 682. 棒球比赛

你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一： 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。

2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效   回合得分的总和。
3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效   回合得分的两倍。
4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效   回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/baseball-game

```js
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = [];
  let len = ops.length;
  let i = 0;
  while (i < len) {
    if (ops[i] === 'C') {
      stack.pop();
    } else if (ops[i] === 'D') {
      let a = stack[stack.length - 1];
      stack.push(2 * a);
    } else if (ops[i] === '+') {
      let score = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(score);
    } else {
      // 直接得分
      stack.push(Number(ops[i]));
    }

    i++;
  }
  return stack.reduce(function(prev, curr, index) {
    return (prev += curr);
  });
};
```

### 496. 下一个更大元素 I

给定两个没有重复元素的数组  nums1 和  nums2 ，其中 nums1  是  nums2  的子集。找到  nums1  中每个元素在  nums2  中的下一个比其大的值。

nums1  中数字  x  的下一个更大元素是指  x  在  nums2  中对应位置的右边的第一个比  x  大的元素。如果不存在，对应位置输出-1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-greater-element-i

```js
/**
 * 字典加栈，因为是子集的关系，所以只需要将nums2做单调栈的判断即可，然后用map记录数组的关系。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let map = {};
  let stack = [];
  let res = [];
  for (let n of nums2) {
    if (stack.length == 0) {
      stack.push(n);
    } else {
      if (n > stack[stack.length - 1]) {
        // 取完栈中所有小于n的数据
        let i = stack.length - 1;
        while (stack[i] < n) {
          map[stack[i]] = n;
          stack.pop();
          i -= 1;
        }
      }

      stack.push(n);
    }
  }
  for (let s of stack) {
    map[s] = -1;
  }

  for (let i = 0; i < nums1.length; i++) {
    res[i] = map[nums1[i]];
  }

  return res;
};
```

## 参考资料

- [Wikipedia](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>)
- [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)

---

- [front-end-manual 前端手册](https://github.com/giscafer/front-end-manual)
- [数据结构与算法学习 & leetcode JavaScript 题解](https://github.com/giscafer/leetcode-js)

![大前端洞见](http://ww1.sinaimg.cn/large/940e68eegy1gcy1r1yeq5j20k008ctas.jpg)
