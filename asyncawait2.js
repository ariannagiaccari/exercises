function caricaModulo(modulo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      }, 2000);
    });
  }

async function lanciaVeicoloSpaziale() {
    const lancioA = await caricaModulo("A");
    console.log(lancioA)
    const lancioB = await caricaModulo("B");
    console.log(lancioB)
    const lancioC = await caricaModulo("C");
    console.log(lancioC)
    setTimeout(()=> {
        console.log("Veicolo spaziale pronto per il lancio!")
    }, 3000)
}
lanciaVeicoloSpaziale()