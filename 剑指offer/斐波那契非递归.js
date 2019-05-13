function Fibonacci(n) {
  let sum
  var arr = [0, 1]
  if (n < 2) {
    return arr[n]
  }
  let pre = 0
  let next = 1
  for (let i = 2; i <= n; i++) {
    sum = pre + next
    pre = next
    next = sum
  }
  return sum

}