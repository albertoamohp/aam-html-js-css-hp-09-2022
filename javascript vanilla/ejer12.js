const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let password = "1234";
let contador = 0;

readline.question("Introduzca la constraseña ", (pass) => {
  if (pass != password && contador < 3) {
    contador += 1;
    preguntar();
  }

  if (pass == password) {
    contador = 0;
    console.log("Contraseña CORRECTA");
    readline.close();
  }

  if (contador == 3) {
    console.log("Intentos Agotados 3/3");
    readline.close();
  }
});

function preguntar() {
  if (contador < 3) {
    readline.question("Introduzca la contraseña ", (pass) => {
      if (pass != password && contador < 3) {
        contador += 1;
        preguntar();
      }

      if (pass == password) {
        contador = 0;
        console.log("Contraseña CORRECTA");
        readline.close();
      }

      if (contador == 3) {
        console.log("Intentos Agotados 3/3");
        readline.close();
      }
    });
  }
}
