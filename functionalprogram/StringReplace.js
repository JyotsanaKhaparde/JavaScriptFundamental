var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question("please enter your name: ",(name)=>{
    utility.replceName(name);
    process.exit();
});

/*rl.question("please enter your name: ",function(name)
{
    utility.replceName(name);
});*/



