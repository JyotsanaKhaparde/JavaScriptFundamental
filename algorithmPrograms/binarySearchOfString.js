var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter the word you want to search: ',(word)=>{
    utility.binarySearchOfString(word);
    process.exit();
})

