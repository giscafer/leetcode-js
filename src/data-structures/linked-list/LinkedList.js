import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/Comparator';

export default class LinkedList {
  /**
   * @param {Function} comparatorFunction
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // 创建一个新的节点作为 head
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // 如果没有尾节点，就用新节点作为尾节点
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // 如果链表为空时
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // 链表不为空，将新的节点作为链尾节点
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // 如果链头巧好是查找的值
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // 找到下一个节点是要删除的节点，然后移除掉
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // 如果 tail 节点是要删除的节点
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // 如果 callback不为空，则使用callback规则来查找
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      // 链表只有一个节点
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // 如果有很多个节点，遍历找到最后一个节点并删除倒数第二个节点的后继指针 next
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.next === null) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {*[]} values - 需要转换为链表的值的数组.
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }

  /**
   * TODO:
   * 反转一个链表
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // 存储下一个节点
      nextNode = currNode.next;

      // 修改当前节点的后继指针 next 指向 prevNode
      currNode.next = prevNode;

      // 移动 prevNode 和 currNode 节点向前一步，继续遍历
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  }
}
