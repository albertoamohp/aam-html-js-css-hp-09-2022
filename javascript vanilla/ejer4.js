const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('¿Cuanto es el radio?', radio => {
    let area = 3.14 * radio
    console.log(`El area es: ${area}!`);
    readline.close();
  });