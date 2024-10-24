
const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };
  

  const fibonacci = (num) => {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  

  const factorialNumber = 5;  
  const fibonacciNumber = 7;  
  

  const factorialResult = factorial(factorialNumber);
  const fibonacciResult = fibonacci(fibonacciNumber);
  

  console.log(`Factorial of ${factorialNumber} is ${factorialResult}`);
  console.log(`Fibonacci of ${fibonacciNumber} is ${fibonacciResult}`);
  