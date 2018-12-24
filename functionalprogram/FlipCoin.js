const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('../utility/Utility');
rl.question("Enter number of time flip coin: ",(flip)=>{
    if(flip < 0){
        console.log('please enter positive number: ');
        process.exit();

    }else{
        rl.question('enter number of time flip coin: ',(flip));
        utility.flipCoin(flip);
        process.exit();

    }
});


