# 排序

排序算法很多，最经典的、最常用的排序算法有：冒泡排序、插入排序、选择排序、归并排序、快速排序、计数排序、基数排序、桶排序。

## 如何分析一个“排序算法”？

### 算法的执行效率

- 最好情况、最坏情况、平均情况时间复杂度
- 时间复杂度的系数、常熟、低阶（日常程序中的排序规模数据一般不大，所以这些点要考虑不能忽略）
- 比较次数和交换（或移动）次数

### 排序算法的内存消耗

排序算法也分为**原地算法** 和 **非原地算法**，原地算法的空间复杂度为 O(1)

### 排序算法的稳定性

如果排序的序列中存在值相等的元素，在排序之后，相等元素之间原有的先后顺序不变。我们就称为这个排序是稳定的，相反则为不稳定性。

## 排序算法

### 冒泡排序

> 时间复杂度 O(n²)、稳定性、原地排序

冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。

我用一个例子，带你看下冒泡排序的整个过程。我们要对一组数据 4，5，6，3，2，1，从小到到大进行排序。第一次冒泡操作的详细过程就是这样：

![一次冒泡排序过程](./img/bubble-sort.jpeg)

```js
/**
 * 冒泡排序： 时间复杂度 O(n²)、稳定排序算法，原地排序算法
 */
export default function bubbleSort(arr) {
  const len = arr.length;
  if (len <= 1) return;

  for (let i = 0; i < len; i += 1) {
    let flag = false;
    for (let j = 0; j <= len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        flag = true;
      }
    }
    if (!flag) return;
  }
}
```

### 插入排序

> 时间复杂度 O(n²)、稳定性、原地排序

插入排序很像我们玩扑克的时候，调整牌大小的循序时，插入到指定位置的情况一样。

![](./img/insert-thought.jpeg)

我们可以将数组的数字分为两个区间，**已排序区间**和**未排序区间**。初始已排序只有一个元素，就是数组的第一个元素。插入算法的核心思想是取未排序区间的元素，在已排序区间找到合适的位置插入，并保证已排序区间数据一直有序。重复这个过程，知道未排序区间中的元素为空，算法结束。

如图所示，要排序的数据是 4，5，6，1，3，2，其中左侧为已排序区间，右侧是未排序区间。

![](./img/insert-sample.jpeg)

插入算法包含两种操作，一种是**元素的比较**，一种是**元素的移动**。

```js
function insertSorting(arr) {
  const len = arr.length;
  if (len <= 1) return;
  for (let i = 0; i < len; i += 1) {
    const current = arr[i];
    const prevIndex = i - 1;
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex -= 1;
    }
    arr[prevIndex + 1] = current;
  }
}
```

### 选择排序

> 时间复杂度 O(n²)、不稳定性、原地排序

选择排序将需要排序的数组分为**未排序区间**和**已排序区间**，然后每次从未排序区间选择**最小**的元素，将其放到已排序区间的末尾。

![](./img/select-sort.jpeg)

```js
/**
 * 选择排序
 * 时间复杂度 O(n²)，原地排序，非稳定排序
 * @param {Array} arr
 */
/* eslint no-param-reassign: ["error", { "props": false }] */
export default function selectSort(arr) {
  const len = arr.length;
  if (len <= 1) return;

  for (let i = 0; i < len - 1; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[j] < arr[minIndex]) {
        // 未分配区找出最小值
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      // 有可能是未分配区找不到比arr[i] 小的数字，相等的时候不做数据交换
      const temp = arr[i];
      arr[i] = arr[minIndex]; // 追加到已分配区末尾，位置交换
      arr[minIndex] = temp;
    }
  }
}
```

#### 冒泡排序和插入排序的时间复杂度都是 O(n2)，都是原地排序算法，为什么插入排序要比冒泡排序更受欢迎呢？

从代码实现上来看，冒泡排序的数据交换要比插入排序的数据移动要复杂，冒泡排序需要 3 个赋值操作，而插入排序只需要 1 个。

我们把执行一个赋值语句的时间粗略地计为单位时间（unit_time），然后分别用冒泡排序和插入排序对同一个逆序度是 K 的数组进行排序。用冒泡排序，需要 K 次交换操作，每次需要 3 个赋值语句，所以交换操作总耗时就是 `3*K` 单位时间。而插入排序中数据移动操作只需要 `K` 个单位时间。

### 


--- 

- [front-end-manual 前端手册](https://github.com/giscafer/front-end-manual)
- [数据结构与算法学习 & leetcode JavaScript 题解](https://github.com/giscafer/leetcode-js)

![大前端洞见](http://ww1.sinaimg.cn/large/940e68eegy1gcy1r1yeq5j20k008ctas.jpg)


