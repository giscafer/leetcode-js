import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const head = this.linkedList.deleteHead();
    return head ? head.value : null;
  }

  peek() {
    if (this.linkedList.head) {
      return this.linkedList.head.value;
    }
    return null;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
