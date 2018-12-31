var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter expression ',(value)=>{
    utility.balancedParantheses(value);
    process.exit();
})