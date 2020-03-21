/**
 * @param {number} N
 * @return {number}
 */
function fib(N) {
  if (N <= 1) {
    return N;
  }
  if (N === 2) {
    return 1;
  }
  let current = 0; // fib(n-1)+fib(n+2)
  let prev1 = 1; // fib(n-2)
  let prev2 = 1; // fib(n-1)

  for (let i = 3; i <= N; i += 1) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
}

fib(3);
