# 排序

- [排序](#排序)
  - [如何分析一个“排序算法”？](#如何分析一个排序算法)
    - [算法的执行效率](#算法的执行效率)
    - [排序算法的内存消耗](#排序算法的内存消耗)
    - [排序算法的稳定性](#排序算法的稳定性)
  - [排序算法](#排序算法)
    - [冒泡排序](#冒泡排序)
    - [插入排序](#插入排序)
    - [选择排序](#选择排序)
      - [冒泡排序和插入排序的时间复杂度都是 O(n2)，都是原地排序算法，为什么插入排序要比冒泡排序更受欢迎呢？](#冒泡排序和插入排序的时间复杂度都是-on2都是原地排序算法为什么插入排序要比冒泡排序更受欢迎呢)
    - [归并排序](#归并排序)
    - [快排序](#快排序)
  - [题](#题)
    - [O(n) 时间复杂度内求无序数组中的第 K 大元素？](#on-时间复杂度内求无序数组中的第-k-大元素)

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

### 归并排序

归并排序的核心思想还是蛮简单的。如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。

归并排序是一个 稳定的排序算法，但不是原地排序算法；时间复杂度 O(nlogn)，空间复杂度 O(n)

![](./img/merge-sort.jpeg)

```js
/**
 * 归并排序
 */
export default function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;

  const mid = Math.floor(len / 2); // 中间值
  // 分治递归
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // 递归、分治、合并
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 有序的合并数组
 * @param {Array} leftArr
 * @param {Array} rightArr
 */
function merge(leftArr, rightArr) {
  let tmp = [];
  let l = 0;
  let r = 0;
  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] <= rightArr[r]) {
      tmp.push(leftArr[l]);
      l += 1;
    } else {
      tmp.push(rightArr[r]);
      r += 1;
    }
  }
  // 合并多余的数组
  return tmp.concat(rightArr.slice(r)).concat(leftArr.slice(l));
}
```

### 快排序

快排的思想是这样的：如果要排序数组中下标从 p 到 r 之间的一组数据，我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。

我们遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，将 pivot 放到中间。经过这一步骤之后，数组 p 到 r 之间的数据就被分成了三个部分，前面 p 到 q-1 之间都是小于 pivot 的，中间是 pivot，后面的 q+1 到 r 之间是大于 pivot 的。

![](./img/quick-sort.jpeg)

一张图来展示分区的整个过程

![](./img/quick-sort2.jpeg)

```js
/**
 * 快排，原地排序，非稳定性排序，空间复杂度为O(1)，时间复杂度为O(nlogn)
 * @param {Array} arr
 */
export default function quickSort(arr, left, right) {
  if (isNaN(Number(left)) || isNaN(Number(left))) return;
  if (left >= right) return;
  const pivot = right;
  const partitionIndex = partition(arr, pivot, left, right);
  quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
  quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right);
}

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

/**
 * 分区交换，左边数小于 pivotVal，右边数大于pivotVal
 * 类似选择排序，使用原地排序算法，使得空间复杂度为O(1)
 * @param {Array} arr 数组
 * @param {Numer} pivot 分区点索引位置
 * @param {Number} left 起始索引
 * @param {Number} right 终止索引
 */
function partition(arr, pivot, left, right) {
  const pivotVal = arr[pivot];
  let startIndex = left;
  for (let i = left; i < right; i += 1) {
    if (arr[i] < pivotVal) {
      // 将小于分区值都左移
      swap(arr, i, startIndex);
      startIndex += 1;
    }
  }
  swap(arr, startIndex, pivot); // startIndex 就是分区值分治的最终位置
  return startIndex;
}
```

## 题

### O(n) 时间复杂度内求无序数组中的第 K 大元素？

选择排序从大到小排序，排到第 K 个元素就可以找到元素，但是时间复杂度为 `O(K*n)`，如果 K 不是 1，2，那 `K*n` 可能是个不小的值,所以不能用选择排序。

可以用分区的思想来解决，我们选择数组区间 A[0…n-1] 的最后一个元素 A[n-1] 作为 pivot，对数组 A[0…n-1] 原地分区，这样数组就分成了三部分，A[0…p-1]、A[p]、A[p+1…n-1]。

如果 `p+1=K`，那 A[p] 就是要求解的元素；如果 `K>p+1`, 说明第 K 大元素出现在 A[p+1…n-1] 区间，我们再按照上面的思路递归地在 A[p+1…n-1] 这个区间内查找。同理，如果 `K<p+1`，那我们就在 A[0…p-1] 区间查找。

![](./img/quick-sort3.jpeg)

---

- [front-end-manual 前端手册](https://github.com/giscafer/front-end-manual)
- [数据结构与算法学习 & leetcode JavaScript 题解](https://github.com/giscafer/leetcode-js)

![大前端洞见](http://ww1.sinaimg.cn/large/940e68eegy1gcy1r1yeq5j20k008ctas.jpg)
