// 1st approach itterative
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  for (let i = 0; i < n; i++) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  return n1;
}
// console.log(fibonacci(6))

// 2nd recursive approach
function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(6))
