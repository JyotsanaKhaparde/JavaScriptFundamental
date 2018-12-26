var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter decimal number :',(number)=>{
   var reverse =  utility.toBinary(number);
  console.log('decimal to binary is : ',(reverse));
   process.exit();
})