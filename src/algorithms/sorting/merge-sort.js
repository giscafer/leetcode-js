/**
 * 有序的合并数组
 * @param {Array} leftArr
 * @param {Array} rightArr
 */
function merge(leftArr, rightArr) {
  const tmp = [];
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
