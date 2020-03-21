/**
 * 冒泡排序
 * 时间复杂度 O(n²)
 * 稳定排序算法，原地排序算法
 */
/* eslint no-param-reassign: ["error", { "props": false }] */
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
