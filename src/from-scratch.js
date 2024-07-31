// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr = [], sumOfArray = 0, index = 0) => {
  if (arr.length === index) return sumOfArray
  return sum(arr, sumOfArray + arr[index], index + 1)

}

// Reverse string using recursive approach
const reverse = (str) => { };

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => { };

// Recursive fibonacci
const fibRec = (n) => { };

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => { };

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
