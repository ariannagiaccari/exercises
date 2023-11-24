function sum (...rest) {
    return rest.reduce((a, rest) => a + rest, 0);
}
const mySum = sum(5, 6, 7, 8, 9);
console.log(mySum)