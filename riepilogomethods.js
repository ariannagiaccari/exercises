const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

studenti.forEach(studente => console.log(studente.nome));

const votiPiuAlti = studenti.find(numero => numero.voto >= 90)  
console.log(votiPiuAlti)

const media = studenti.reduce((a, stud) => a + stud.voto, 0);
const mediaVoti = media / studenti.length;
console.log(mediaVoti);

const nomeMaiuscolo = studenti.map(capital => {
  capital.nome = capital.nome.toUpperCase() ;
  return capital
})

const votiSopra85 = studenti.filter(numero => numero.voto >= 85);
console.log(votiSopra85);

