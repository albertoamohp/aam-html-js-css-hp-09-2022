const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let suma = 0;
let cont = 0;
let total = 0;
readline.question("Introduce el total de ventas: ", (answer1) => {
  total = answer1;
  if (cont < total) {
    cont += 1;
    preguntar(cont);
  }

  if (cont > total) {
    //readline.close();
    console.log("La Suma Total es:", suma);
    //readline.close();
  }
});

function preguntar(indice) {
  if (cont <= total)
    readline.question(
      `Introduzca el valor de la venta: ${indice} `,
      (answer2) => {
        suma += parseInt(answer2);
        cont += 1;
        preguntar(cont);
      }
    );

  if (cont > total) {
    console.log('TOTAL es:', suma);
    readline.close();
  }
}
