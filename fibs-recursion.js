// recursion solution to fibonacci sequence
// take a number n and return an array containing that many numbers from the sequence

function fibsRec(n) {
    // Base cases 
    if (n <= 0) return "Please enter a number greater than 0.";
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibs = fibsRec(n - 1); // get the first (n-1) fibonacci numbers
    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2]; // compute the next fibonacci number
    fibs.push(nextFib); // add the next fibonacci number to the array

    return fibs;
}

console.log(fibsRec(-10));  // returns "Please enter a number greater than 0."
console.log(fibsRec(0));  // returns "Please enter a number greater than 0."
console.log(fibsRec(1));  // returns [0]
console.log(fibsRec(2));  // returns [0, 1]
console.log(fibsRec(3));  // returns [0, 1, 1]
console.log(fibsRec(8));  // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(14));  // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]