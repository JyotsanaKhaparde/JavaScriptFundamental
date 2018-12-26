var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter the number you want to search: ',(number)=>{
    utility.binarySearchOfInteger(number);
    process.exit();
})
