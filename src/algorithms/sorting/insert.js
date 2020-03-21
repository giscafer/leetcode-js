/**
 * 插入排序
 * 时间复杂度O(n²)，原地排序、稳定排序
 * @param {Array} arr
 */
export default function insertSort(arr) {
  const len = arr.length;
  if (len <= 1) return;
  // 假设已排区为数组第一个元素，其他为未排区
  for (let i = 1; i < len; i += 1) {
    const value = arr[i]; // 未排区
    let j = i - 1;
    for (; j >= 0; j -= 1) {
      if (arr[j] > value) {
        // value 和 已排区元素比较
        arr[j + 1] = arr[j]; // 数据移动
      } else {
        break;
      }
    }
    arr[j + 1] = value; // 插入数据（j最小为-1）
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export function inserting(arr) {
  const len = arr.length;
  if (len <= 1) return;
  for (let i = 0; i < len; i += 1) {
    let preIndex = i - 1;
    const current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    arr[preIndex + 1] = current;
  }
}
