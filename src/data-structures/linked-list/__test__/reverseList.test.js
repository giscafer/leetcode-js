/* import LinkedList from '../LinkedList';

const reverseList = (head, linkedList) => {
  if (head == null || head.next == null) return head;
  let next = head.next;
  let p = reverseList(next, linkedList);
  head.next.next = head;
  head.next = null;
  linkedList.head = head;
  console.log(linkedList);

  return p;
};

describe('LinkedList Reverse', () => {
  it('should reverse linked list', () => {
    const linkedList = new LinkedList();

    // Add test values to linked list.
    linkedList
      .append(1)
      .append(2)
      .append(3);

    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);

    // Reverse linked list.
    reverseList(linkedList.head, linkedList);
    expect(linkedList.toString()).toBe('3,2,1');
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(1);

    // Reverse linked list back to initial state.
    // linkedList.reverse();
    // expect(linkedList.toString()).toBe('1,2,3');
    // expect(linkedList.head.value).toBe(1);
    // expect(linkedList.tail.value).toBe(3);
  });
});
 */
