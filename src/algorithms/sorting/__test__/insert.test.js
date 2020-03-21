import insertSort from '../insert';

describe('Insert Sort', () => {
  it('correct', () => {
    const arr = [5, 4, 6, 8, 9, 23, 1, 3];
    insertSort(arr);
    expect(arr[0]).toBe(1);
    expect(arr.toString()).toBe('1,3,4,5,6,8,9,23');
  });
});
