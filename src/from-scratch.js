// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr = [], sumOfArray = 0, index = 0) => {
  if (arr.length === index) return sumOfArray;
  return sum(arr, sumOfArray + arr[index], index + 1);
};

// Refer to the recorded lecture and lab review from 7/29 in the Nirvana technical repo. We reviewed reverse and both fibonacci functions in those recordings.
// Reverse string using recursive approach
const reverse = (str) => {
  if (str.length === 1) return str
  return reverse(str.substring(1)) + str[0]
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  //guard clause for 0 input
  if (n === 0) return 0

  // get the fib number --> add thhe previous number with the curr number
  let first = 0
  let second = 1
  let fib = first + second

  // start building the sequence iteraively
  //loop n amount of times to build the nth fib number
  for (let i = 2; i < n; i++) {
    // update first
    first = second
    //update second
    second = fib
    // update fib
    fib = first + second
  }
  return fib
};


// Recursive fibonacci
const fibRec = (n) => {
  if (n <= 1) return n

  return fibRec(n - 1) + fibRec(n - 2)
};


// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return -1
  }
  // Find the middle index first 
  const middle = Math.floor((start + end) / 2);
  // the middle index is not the target 
  if (arr[middle] === target) {
    return middle
    // check if the middle index is less than the target
  } else if (arr[middle] > target) {
    // call function recursivly on the left side of the array 
    return binarySearch(arr, target, start, middle - 1)
  } else {
    // call function recursivly 
    return binarySearch(arr, target, middle + 1, end)
  }
  // call the function recursivly on the middle index and the last index
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
