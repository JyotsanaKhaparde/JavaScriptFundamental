var utility =  require('../utility/Utility')
var rl = utility.userInput();


rl.question('Enter any number: ',(number)=>{
    utility.factorial(number);
    process.exit();
})

