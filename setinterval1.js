let tempoRimanente = 10;

function contoAllaRovescia() {
    console.log(tempoRimanente --);
    if (tempoRimanente === -1){
      console.log("Il conto alla rovescia è terminato");

    };
  //....
}
console.log("Conto alla rovescia in corso...");
const tempo = setInterval(contoAllaRovescia, 1000);

setTimeout (() => {
    clearInterval(tempo);
}, 12000)


