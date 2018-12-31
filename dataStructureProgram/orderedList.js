var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any word for checking: ',(number)=>{
    utility.orderedList(number);
    process.exit();
})