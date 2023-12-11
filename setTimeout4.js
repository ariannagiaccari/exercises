let lanciaDadi = () => {
    return Math.floor(Math.random() * 6) + 1;

}
function lancio() {
    console.log("Lancio dei dadi in corso...")
    let dado1 = lanciaDadi();
    let dado2 = lanciaDadi();
    setTimeout(() => {
        console.log(`Dado 1 = ${dado1}, dado 2 = ${dado2}`)
    }, 2000);
}
lancio()