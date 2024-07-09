// takes in an array and returns a sorted array
// using a recursive merge sort methodolgy

// solution: 
// split the array into halves
// recursively sort each half
// then merge the sorted halves together

function mergeSort(array) {
    if (array.length <= 1) return array;

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // compare the elements of both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }

    // concatenate the remaining elements (if any) from both arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([])); // []
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
console.log(mergeSort([30, 20, 13, 50, 22, 33, 55])); // [13, 20, 22, 30, 33, 50, 55]