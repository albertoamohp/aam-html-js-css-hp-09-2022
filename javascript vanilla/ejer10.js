const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Please enter the first number : ', (answer1) => {
  for(let i = 1; i< 4; i++){
  readline.question('Please enter the second number : ', (i) => {
      var result = (+answer1) + (+i);
      console.log(`The sum of above two numbers is ${result}`);
      //readline.close();
  });
  }
});
