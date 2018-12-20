const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

var utility = require('../utility/Utility');


//var utility = require('../utility/Utility');
rl.question("please enter your name: ",(name)=>{
    utility.replceName(name);
});

/*rl.question("please enter your name: ",function(name)
{
    utility.replceName(name);
});*/



