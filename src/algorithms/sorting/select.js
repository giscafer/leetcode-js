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
    if (i !== minIndex) { // 有可能是未分配区找不到比arr[i] 小的数字，相等的时候不做数据交换
      const temp = arr[i];
      arr[i] = arr[minIndex]; // 追加到已分配区末尾，位置交换
      arr[minIndex] = temp;
    }
  }
}
