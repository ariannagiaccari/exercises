function filterArray(arr, callback) { 
    return callback(arr);
}

function isEven(num) {
    return numbers.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]