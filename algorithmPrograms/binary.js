var utility =  require('../utility2/Utility')

var rl = utility.userInput();
rl.question('please enter decimal number: ',(number)=>{
    utility.binary(number);
    process.exit();
})