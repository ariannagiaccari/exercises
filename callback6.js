const user = {name: "John", age: 30 };

function fetchDataFromAPI(callback) {
    let data = user
    setTimeout(() => {
        callback(data);
    }, 2000)
    console.log("Sto recuperando i dati...")
  }
  
  function handleData(data) {
    console.log(data);
  }
  
  fetchDataFromAPI(handleData);