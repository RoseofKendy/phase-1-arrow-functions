// (1, 2) Function expression called divide
const divide = function() {
    return 2000 / 100; // 20
  };
  
  // (3, 4) Arrow function called square
  const square = num => num * num;
  
  // (5, 6) Arrow function called add
  const add = (num1, num2) => num1 + num2;
  
  // Test Cases
  console.log(divide()); // 20
  console.log(square(4)); // 16
  console.log(add(5, 3)); // 8
  