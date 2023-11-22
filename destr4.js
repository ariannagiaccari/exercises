// Date due variabili a e b, scambia i loro valori usando la destrutturazione.

let a = 5;
let b = 10;

const Var = [a, b];
let [valueA, valueB] = Var;
[valueA, valueB] = [valueB, valueA];
console.log(valueA, valueB);



