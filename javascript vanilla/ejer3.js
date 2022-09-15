const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('¿Como te llamas?', name => {
    console.log(`Bienvenido ${name}!`);
    readline.close();
  });