import sort from '../quick-sort';

describe('Merge Sort', () => {
  it('correct', () => {
    const arr = [2, 11, 13, 4, 5, 16, 6, 34];
    sort(arr, 0, arr.length - 1);
    expect(arr[1]).toBe(4);
    expect(arr.toString()).toBe('2,4,5,6,11,13,16,34');
  });
});
