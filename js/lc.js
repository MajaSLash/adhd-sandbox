var climbStairs = function (n) {
  console.log("n:" + n);
  if (n == 0 || n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  let combos = fib(n - 1) + fib(n - 2);
  console.log("Answer:" + combos);
  return combos;
};

function fib(m) {
  console.log("m:" + m);
  let sum = 0;

  if (m == 0 || m == 1) {
    return 1;
  }
  if (m == 2) {
    return 2;
  } else {
    for (let i = 1; i < m; i++) {
      console.log("i =" + i);
      sum += i;

      console.log("Sum:" + sum);
    }
  }

  console.log("Total:" + sum);
  return sum;
}
console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
