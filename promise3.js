const myAnimals = "frog, cat, moneky, dog, horse";

function animals(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (string.includes("cat")) {
                resolve("You do!");
            } else {
                reject(new Error("You have no cats :("));

            }
        }, 2000)
    });
}
console.log("Let's see if you have a cat...");
const check = animals(myAnimals).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error.message);
})
console.log(check);