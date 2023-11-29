const user = { name: "John", age: 20 };

function fetchDataFromAPI(callback) {
    let data = user;
    console.log("Sto recuperando i dati...");

    const check = handleData(data).then((x) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

}

function handleData(data) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.age >= 18) {
                resolve("L'utente è maggiorenne...ok!")
            } else {
                reject("L'utente deve essere maggiorenne")
            }

        }, 2000)


    })
}
fetchDataFromAPI(handleData);
