import sort from '../merge-sort';

describe('Merge Sort', () => {
  it('correct', () => {
    const arr = [2, 11, 13, 4, 5, 16, 6, 34];
    const newArr = sort(arr);
    expect(newArr[1]).toBe(4);
    expect(newArr.toString()).toBe('2,4,5,6,11,13,16,34');
  });
});
