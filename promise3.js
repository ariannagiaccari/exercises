const myAnimals = "cat, frog, moneky, dog, horse, pig"

function animals(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (string.includes("dog" && "cat")) {
                resolve("You have cats and dogs!");
            } else {
                reject(new Error("You have no cats or dogs :("))

            }
        }, 2000)
    })
}
console.log("Let's see if you have domestic animals...")
const check = animals(myAnimals).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error.message);
})
console.log(check)