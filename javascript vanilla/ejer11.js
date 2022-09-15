const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Introduzca el dia de la semana: (1,7) ", (dia) => {
  switch (dia) {
    case '6':
        console.log('NO es laborable');
      break;
    case '7':
        console.log('NO es laborable');
      break;

    default:
        console.log('ES laborable')
      break;
  }
  readline.close();
});
