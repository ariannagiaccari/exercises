function filterArray(arr, callback) {
    const evenNums = arr.filter((num) => num % 2 === 0);
    return evenNums;
}
function isEven(num) {
    return num;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]