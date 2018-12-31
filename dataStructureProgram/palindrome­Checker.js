var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any value ',(value)=>{
    utility.palindromChecker(value);
    process.exit();
})