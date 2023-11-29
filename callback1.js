function doubleArray(arr, callback) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i]);
    }
    return newArr;

}
function doubleValue(num) {
    return num * 2
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]
