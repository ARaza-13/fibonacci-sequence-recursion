// iteration solution to fibonacci sequence
// take a number n and return an array containing that many numbers from the sequence

function fibs(n) {
    const fib = [0, 1];
    let a = 0;
    let b = 1;

    if (n <= 0) {
        return "Please enter a number greater than 0.";
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return fib;
    }

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        fib.push(c);

        a = b;
        b = c;
    }

    return fib;
}

console.log(fibs(-10));  // returns "Please enter a number greater than 0."
console.log(fibs(0));  // returns "Please enter a number greater than 0."
console.log(fibs(1));  // returns [0]
console.log(fibs(2));  // returns [0, 1]
console.log(fibs(3));  // returns [0, 1, 1]
console.log(fibs(8));  // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(14));  // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]