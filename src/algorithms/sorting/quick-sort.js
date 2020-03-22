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
    if (arr[i] < pivotVal) { // 将小于分区值都左移
      swap(arr, i, startIndex);
      startIndex += 1;
    }
  }
  swap(arr, startIndex, pivot); // startIndex 就是分区值分治的最终位置
  return startIndex;
}
