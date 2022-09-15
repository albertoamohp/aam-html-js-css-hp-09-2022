const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Introduzca el operador 1-> ", (num1) => {
  readline.question("Introduzca el operador 2-> ", (num2) => {
    readline.question("Introduzca el simbolo de operación (+,-,*,/,^, %)", (simbol) => {
      calcular(num1, num2, simbol);
    });
  });
});

function calcular(num1, num2, operacion) {
  let stringEval = "";
  stringEval = stringEval.concat(num1, operacion, num2);
  let resultado;
  if(operacion != '^')
  resultado = Function("return " + stringEval)();

  else {
    resultado = Math.pow(parseInt(num1), parseInt(num2));
  }
  console.log(
    "El resultado de",
    num1,
    " ",
    operacion,
    " ",
    num2,
    " es: ",
    resultado
  );
  readline.close();
}
