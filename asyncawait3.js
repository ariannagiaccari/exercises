function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
        const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
        setTimeout(() => {
            if (tempoCaricamento < 1500) {
                resolve(`Il modulo ${modulo} è stato caricato.`);
            } else {
                reject(`Errore durante il caricamento del modulo ${modulo}.`);
            }
        }, tempoCaricamento);
    });
}

async function lanciaVeicoloSpaziale() {

    try {
        const lancioA = await caricaModulo("A");
        console.log(lancioA)
        const lancioB = await caricaModulo("B");
        console.log(lancioB)
        const lancioC = await caricaModulo("C");
        console.log(lancioC)
        setTimeout(() => {
            console.log("Veicolo spaziale pronto per il lancio!")
        }, 3100)

    } catch (error) {
        console.log(error)
    }
}
lanciaVeicoloSpaziale() 