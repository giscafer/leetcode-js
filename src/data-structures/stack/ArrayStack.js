/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2020-03-17 11:35:29
 * @description: 使用数组实现栈，是一种顺序栈(此例子没有指定数组大小)
 */
export default class ArrayStack {
  constructor() {
    this.count = 0; // 当前栈使用个数
    this.stack = []; // 数组，用来模拟栈
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.count - 1];
  }

  push(val) {
    this.stack.push(val);
    this.count++;
    return val;
  }

  pop() {
    if (this.count === 0) {
      return null;
    }
    this.count--;
    return this.stack.pop();
  }

  isEmpty() {
    return this.count === 0;
  }

  toString() {
    return this.stack.toString();
  }
}
