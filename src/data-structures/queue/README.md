# 队列

<!--ts-->
<!--te-->

在计算机科学中, 一个 **队列(queue)** 是一种特殊类型的抽象数据类型或集合。集合中的实体按顺序保存。

队列基本操作有两种: 向队列的后端位置添加实体，称为入队，并从队列的前端位置移除实体，称为出队。

队列中元素先进先出 FIFO (first in, first out)的示意

![Queue](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

### 链表实现队列

[./Queue.js](./Queue.js)

### 其他队列结构

- 循环队列 （确定好队空和队满的判定条件）
- 阻塞队列 （队列为空的时候，从队头取数据会被阻塞；队列满时，插入数据操作被阻塞）
- 并发队列 （多个线程操作队列，这个时候就会存在线程安全问题，线程安全的队列就叫并发队列）

### 除了线程池这种池结构会用到队列排队请求，你还知道有哪些类似的池结构或者场景中会用到队列的排队请求呢？

- 消息队列，后端的MQ、浏览器V8引擎渲染主线程在执行过程中，异步任务队列、延迟队列等

### 算法题

> https://leetcode-cn.com/problemset/all/?topicSlugs=queue

#### 621. 任务调度器

给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。

然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的最短时间。

示例 1：
```
输入: tasks = ["A","A","A","B","B","B"], n = 2
输出: 8
执行顺序: A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
```
注：

- 任务的总个数为 [1, 10000]。
- n 的取值范围为 [0, 100]。


```js


```

## 参考

- [Wikipedia](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)
- [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)

---

- [front-end-manual 前端手册](https://github.com/giscafer/front-end-manual)
- [数据结构与算法学习 & leetcode JavaScript 题解](https://github.com/giscafer/leetcode-js)

![大前端洞见](http://ww1.sinaimg.cn/large/940e68eegy1gcy1r1yeq5j20k008ctas.jpg)
