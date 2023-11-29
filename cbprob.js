function performOperation(a, b, callback) {
    const sum = a + b;
    if (typeof sum !== "number") {
        callback(new Error("La tua somma non è un numero"), null)
    } else {
        callback(null, sum)
    }
}

function displayResult(error, sum) {
    if (error) {
        console.log(error)
    } else {
        console.log(sum)
    }
}

performOperation(5, 3, displayResult);