function filterOutOdds(...numbers) {
    return numbers.filter(num => num % 2 === 0);

}
const myNums = filterOutOdds(1, 2, 3, 4, 5, 6)
console.log(myNums);