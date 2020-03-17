import ArrayStack from '../ArrayStack';

describe('ArrayStack', () => {
  it('should stack data to stack', () => {
    const stack = new ArrayStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toString()).toBe('1,2,3');
  });

  it('should peek data from stack', () => {
    const stack = new ArrayStack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should pop data from stack', () => {
    const stack = new ArrayStack();

    expect(stack.pop()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
});
