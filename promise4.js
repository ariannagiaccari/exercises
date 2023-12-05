function fetchDataFromAPI() {
    let success = Math.random() / 2;
    return new Promise((resolve, reject) => {
        if (success < 0.5) {
            resolve("Data retrieved successfully");
        } else { reject(new Error("Error: Failed to fetch data")) };
    });
};

fetchDataFromAPI().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error.message);
});


