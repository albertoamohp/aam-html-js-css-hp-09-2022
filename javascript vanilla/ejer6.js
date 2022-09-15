const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Precio del producto: ', num => {
    console.log('pvp con IVA es: ', num*1.21);
    readline.close();
  });