var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any word for checking: ',(word)=>{
    utility.unorderdeList(word);
    process.exit();
})