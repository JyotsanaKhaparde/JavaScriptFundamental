const readline = require('readline');

const userInput = readline.createInterface(

   {

       input: process.stdin,

       output: process.stdout

   });

var utility = require('../utility/Utility');

userInput.question(" Press 1 to start = ", (start) => {

   start = utility.time();

   if (start) {

       userInput.question("Press 2 to stop 2 = ", (stop) => {

          

               stop = utility.time();

              // utility.elapsedTime(start, stop);

               elapsed = utility.elapsedTime(start, stop);

               console.log("Elapsed time from start to stop = "+elapsed/1000+"seconds");

       });
    }
});