const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Introduce valor para saber si es divisible entre 2 ', num => {
    if(num%2 == 0) {
    console.log(`El número: ${num} es divisible entre 2!`);
    }

    else {
        console.log('No es divisible entre 2')
    }
    readline.close();
  });