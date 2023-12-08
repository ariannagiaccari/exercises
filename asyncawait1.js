function caricamentoDati() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
        }, 2000);
    });
};

console.log("Attendere il caricamento dei dati...")

async function ottieniDati() {
    const data = await caricamentoDati();
    console.log(data)
};
ottieniDati();


